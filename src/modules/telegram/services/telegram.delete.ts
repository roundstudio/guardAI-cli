import api from "../../../config/api";
import { toast } from 'react-toastify';

const deleteTelegram = async (id: number): Promise<void> => {
    try {
        await api.delete(`api/telegrams/${id}/`);
        toast.success("تلگرام با موفقیت حذف شد");
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در حذف تلگرام: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در حذف تلگرام: مشخص نشده");
        }
        throw error;
    }
};

export default deleteTelegram;
