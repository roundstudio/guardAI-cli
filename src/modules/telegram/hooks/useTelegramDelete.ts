import { useState } from 'react';
import deleteTelegram from '../services/telegram.delete';

interface UseTelegramDeleteReturn {
    isDeleting: boolean;
    error: string | null;
    deleteTelegramItem: (id: number) => Promise<void>;
}

const useTelegramDelete = (): UseTelegramDeleteReturn => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const deleteTelegramItem = async (id: number) => {
        try {
            setIsDeleting(true);
            setError(null);
            await deleteTelegram(id);
        } catch (err) {
            setError('خطا در حذف تلگرام');
            console.error(err);
        } finally {
            setIsDeleting(false);
        }
    };

    return {
        isDeleting,
        error,
        deleteTelegramItem
    };
};

export default useTelegramDelete;
