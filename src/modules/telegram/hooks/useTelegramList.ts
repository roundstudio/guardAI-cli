import { useState, useEffect } from 'react';
import { Telegram } from '../types';
import listTelegrams from '../services/telegram.list';

export const useTelegramList = () => {
    const [telegrams, setTelegrams] = useState<Telegram[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTelegrams = async () => {
        try {
            setLoading(true);
            const data = await listTelegrams();
            setTelegrams(data);
            setError(null);
        } catch (err) {
            console.error(err);
            setError('خطا در دریافت لیست تلگرام‌ها');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTelegrams();
    }, []);

    return {
        telegrams,
        loading,
        error,
        refetch: fetchTelegrams
    };
};
export default useTelegramList;
