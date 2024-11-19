import deleteTelegram from '../services/telegram.delete';
import { useMutation } from '@tanstack/react-query';



const useTelegramDelete = ()=> {
    const {mutate, isPending, error} = useMutation({
        mutationFn: deleteTelegram,
        mutationKey: ["delete-telegram"]
    })


    return {
        mutate, isPending, error
    };
};

export default useTelegramDelete;
