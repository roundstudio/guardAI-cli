import { useMutation } from "@tanstack/react-query";
import { createTelegram } from "../services";
import useTelegramList from "./useTelegramList";

const useTelegramCreate = () => {
    const { refetch } = useTelegramList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: createTelegram,
        mutationKey: ["createTelegram"],
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useTelegramCreate;
