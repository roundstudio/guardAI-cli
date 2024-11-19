import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCameraDelete, useCameraList } from "../hooks";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import CameraForm from "./camera.form";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Camera } from "../types";


const CameraTable = () => {
    const {data, isLoading, error} = useCameraList();
    const { mutate: deleteCamera } = useCameraDelete();
    const [open, setOpen] = useState(false);
    const [selectedCamera, setSelectedCamera] = useState<Camera | undefined>(undefined);

    const handleOpen = (camera: Camera) =>{
        setSelectedCamera(camera);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleDelete = (id: number) => {
        deleteCamera(id);
    };

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: {error.message}</div>;

    return(
        <>
        <table className="w-full border-collapse border">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">نام دوربین</th>
                    <th className="border p-2">آدرس IP</th>
                    <th className="border p-2">پورت</th>
                    <th className="border p-2">نام کاربری</th>
                    <th className="border p-2">رمز عبور</th>
                    <th className="border p-2">وضعیت</th>
                    <th className="border p-2">توضیحات</th>
                    <th className="border p-2">عملیات</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((camera) => (
                    <tr key={camera.id} className="hover:bg-gray-50">
                        <td className="border p-2">{camera.name}</td>
                        <td className="border p-2">{camera.ip}</td>
                        <td className="border p-2">{camera.port}</td>
                        <td className="border p-2">{camera.username}</td>
                        <td className="border p-2">{camera.password}</td>
                        <td className="border p-2">{camera.is_active ? "فعال" : "غیرفعال"}</td>
                        <td className="border p-2">{camera.description}</td>
                        <td className="border p-2">
                            <button 
                                onClick={() => handleOpen(camera)} 
                                className="text-blue-500 hover:text-blue-700 ml-2" 
                                title="ویرایش دوربین"
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button 
                                onClick={() => handleDelete(camera.id!)} 
                                className="text-red-500 hover:text-red-700" 
                                title="حذف دوربین"
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
                    <CameraForm initialData={selectedCamera} onClose={handleClose} />
                </div>
            </Modal>
        </>

    )
}

export default CameraTable;
