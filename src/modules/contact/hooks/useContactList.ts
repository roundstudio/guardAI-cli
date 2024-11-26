import { useQuery } from "@tanstack/react-query";
import { getContactsList } from "../services/contact.list";

const useContactList = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["contacts"],
        queryFn: getContactsList,
    });

    return { data, isLoading, error, refetch };
}

export default useContactList;
