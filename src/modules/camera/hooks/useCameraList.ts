import { useQuery } from "@tanstack/react-query";
import { getCamerasList } from "../services";




const useCameraList = () => {
    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ["cameras"],
        queryFn: getCamerasList,
    });

    return {data, isLoading, error, refetch};
}

export default useCameraList;
