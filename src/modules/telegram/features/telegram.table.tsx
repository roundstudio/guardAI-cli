import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTelegramDelete, useTelegramList } from "../hooks";
import TelegramForm from "./telegram.form";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Telegram } from "../types";

const TelegramTable = () => {
    const { data, isPending, error } = useTelegramList();
    const { mutate } = useTelegramDelete();
    const [open, setOpen] = useState(false);
    const [selectedTelegram, setSelectedTelegram] = useState<Telegram | undefined>(undefined);

    const handleOpen = (telegram: Telegram) => {
        setSelectedTelegram(telegram);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleDelete = (id: number) => {
        mutate(id);
    };

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">نام</th>
                        <th className="border p-2">توکن</th>
                        <th className="border p-2">شناسه چت</th>
                        <th className="border p-2">وضعیت</th>
                        <th className="border p-2">تاریخ ایجاد</th>
                        <th className="border p-2">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((telegram: Telegram) => (
                        <tr key={telegram.id} className="hover:bg-gray-50">
                            <td className="border p-2">{telegram.name}</td>
                            <td className="border p-2">{telegram.token}</td>
                            <td className="border p-2">{telegram.chat_id}</td>
                            <td className="border p-2">{telegram.status}</td>
                            <td className="border p-2">{telegram.created_at}</td>
                            <td className="border p-2">
                                <button 
                                    onClick={() => handleOpen(telegram)} 
                                    className="text-blue-500 hover:text-blue-700 ml-2" 
                                    title="ویرایش تلگرام"
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button 
                                    onClick={() => handleDelete(telegram.id)} 
                                    className="text-red-500 hover:text-red-700" 
                                    title="حذف تلگرام"
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
                    <TelegramForm initialData={selectedTelegram} onClose={handleClose} />
                </div>
            </Modal>
        </>
    );
};

export default TelegramTable;
