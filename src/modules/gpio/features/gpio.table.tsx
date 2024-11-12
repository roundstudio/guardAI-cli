import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGpioDelete, useGpioList } from "../hooks";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import GpioForm from "./gpio.form";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Gpio } from "../types";

const GpioTable = () => {
    const { data, isLoading, error } = useGpioList();
    const { mutate: deleteGpio } = useGpioDelete();
    const [open, setOpen] = useState(false);
    const [selectedGpio, setSelectedGpio] = useState<Gpio | undefined>(undefined);

    const handleOpen = (gpio: Gpio) => {
        setSelectedGpio(gpio);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleDelete = (id: number) => {
        deleteGpio(id);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">نام GPIO</th>
                        <th className="border p-2">پین</th>
                        <th className="border p-2">مدت زمان</th>
                        <th className="border p-2">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((gpio) => (
                        <tr key={gpio.id} className="hover:bg-gray-50">
                            <td className="border p-2">{gpio.name}</td>
                            <td className="border p-2">{gpio.pin}</td>
                            <td className="border p-2">{gpio.duration}</td>
                            <td className="border p-2">
                                <button onClick={() => handleOpen(gpio)} className="text-blue-500 hover:text-blue-700 ml-2"><FontAwesomeIcon icon={faEdit} /></button>
                                <button onClick={() => handleDelete(gpio.id!)} className="text-red-500 hover:text-red-700"><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal open={open} onClose={handleClose}>
                <div className="modal-content">
                    <GpioForm initialData={selectedGpio} onClose={handleClose} />
                </div>
            </Modal>
        </>
    );
}

export default GpioTable;
