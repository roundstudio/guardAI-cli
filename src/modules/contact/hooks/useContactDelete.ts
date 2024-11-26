import { useMutation } from "@tanstack/react-query";
import { deleteContact } from "../services";
import useContactList from "./useContactList";

const useContactDelete = () => {
    const { refetch } = useContactList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: deleteContact,
        mutationKey: ["deleteContact"],
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useContactDelete;
