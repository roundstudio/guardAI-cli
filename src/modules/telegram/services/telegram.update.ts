import api from "../../../config/api";
import { Telegram } from "../types";
import { toast } from 'react-toastify';

const updateTelegram = async (telegramData: Telegram): Promise<Telegram> => {
    try {
        const response = await api.put<Telegram>(`api/telegram/${telegramData.id}/`, telegramData);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در بروزرسانی تلگرام: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در بروزرسانی تلگرام: مشخص نشده");
        }
        throw error;
    }
};

export default updateTelegram;
