import { useQuery } from "@tanstack/react-query";
import { getGpioList } from "../services";


const useGpioList = () => {
    const { data, isLoading, error ,refetch} = useQuery({
        queryKey: ["gpio"],
        queryFn: getGpioList,
    });
    return { data, isLoading, error ,refetch};
};

export default useGpioList;
