import { useMutation } from "@tanstack/react-query";
import { updateTelegram } from "../services";
import useTelegramList from "./useTelegramList";

const useTelegramUpdate = () => {
    const { refetch } = useTelegramList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: updateTelegram,
        mutationKey: ["updateTelegram"],
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useTelegramUpdate;
