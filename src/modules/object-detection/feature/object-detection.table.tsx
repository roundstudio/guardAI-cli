import { useState } from "react";
import { useObjectDetectionDelete, useObjectDetectionList } from "../hooks";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { UserObjectRequest } from "../types/object-detection.type";
import ObjectDetectionForm from "./object-detection.form";
import { AVAILABLE_OBJECTS } from "../config";

const ObjectDetectionTable = () => {
    const { data, isPending } = useObjectDetectionList();
    const { mutate: deleteObject } = useObjectDetectionDelete();
    const [open, setOpen] = useState(false);
    const [selectedObject, setSelectedObject] = useState<UserObjectRequest | undefined>(undefined);

    const handleOpen = (object: UserObjectRequest) => {
        setSelectedObject(object);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleDelete = (id: number) => {
        deleteObject(id);
    };

    if (isPending) return <div>در حال بارگذاری...</div>;

    return (
        <>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">نام کاربر</th>
                        <th className="border p-2">انواع اشیاء</th>
                        <th className="border p-2">توضیحات</th>
                        <th className="border p-2">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((object) => (
                        <tr key={object.id} className="hover:bg-gray-50">
                            <td className="border p-2">{object.name}</td>
                            <td className="border p-2">
                                {object.object_types.map(type => 
                                    AVAILABLE_OBJECTS.find(obj => obj.name === type.name)?.label
                                ).join('، ')}
                            </td>
                            <td className="border p-2">{object.description}</td>
                            <td className="border p-2">
                                <button 
                                    onClick={() => handleOpen(object)} 
                                    className="text-blue-500 hover:text-blue-700 ml-2"
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button 
                                    onClick={() => object.id && handleDelete(object.id)} 
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal open={open} onClose={handleClose}>
                <div className="modal-content">
                    <ObjectDetectionForm initialData={selectedObject} onClose={handleClose} />
                </div>
            </Modal>
        </>
    );
}

export default ObjectDetectionTable;