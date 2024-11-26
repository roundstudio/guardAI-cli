import api from "../../../config/api";
import { toast } from 'react-toastify';

const deleteContact = async (id: number): Promise<void> => {
    try {
        await api.delete(`api/contact/${id}/`);
        toast.success("پیام با موفقیت حذف شد");
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در حذف پیام: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در حذف پیام: مشخص نشده");
        }
        throw error;
    }
};

export default deleteContact;
