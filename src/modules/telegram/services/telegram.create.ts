import api from "../../../config/api";
import { Telegram } from "../types";
import { toast } from 'react-toastify';

const createTelegram = async (telegramData: Telegram): Promise<Telegram> => {
    try {
        const response = await api.post<Telegram>(`api/telegrams/`, telegramData);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در ایجاد تلگرام: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در ایجاد تلگرام: مشخص نشده");
        }
        throw error;
    }
};

export default createTelegram;
