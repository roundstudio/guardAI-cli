import api from "../../../config/api";
import { Telegram } from "../types";
import { toast } from 'react-toastify';

const listTelegrams = async (): Promise<Telegram[]> => {
    try {
        const response = await api.get<Telegram[]>('api/telegram/');
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در دریافت لیست تلگرام‌ها: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در دریافت لیست تلگرام‌ها: مشخص نشده");
        }
        throw error;
    }
};

export default listTelegrams;
