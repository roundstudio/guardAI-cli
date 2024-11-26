import { useMutation } from "@tanstack/react-query";
import { updateContact } from "../services";
import useContactList from "./useContactList";

const useContactUpdate = () => {
    const { refetch } = useContactList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: updateContact,
        mutationKey: ["updateContact"],
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useContactUpdate;
