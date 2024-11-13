import { useQuery } from "@tanstack/react-query";
import { getObjectDetectionList } from "../services";




const useObjectDetectionList = () => {
    const { data, isPending, isSuccess,refetch } = useQuery({
        queryKey: ["object-detection"],
        queryFn: getObjectDetectionList,
    });
    return { data, isPending, isSuccess, refetch ,};
}

export default useObjectDetectionList;
