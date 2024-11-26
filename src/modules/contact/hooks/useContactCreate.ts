import { useMutation } from "@tanstack/react-query";
import { createContact } from "../services/contact.create";
import useContactList from "./useContactList";

const useContactCreate = () => {
    const { refetch } = useContactList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: createContact,
        mutationKey: ["createContact"],
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useContactCreate;
