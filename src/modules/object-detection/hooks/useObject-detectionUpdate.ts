import { useObjectDetectionList } from ".";
import { updateObjectDetection } from "../services";
import { useMutation } from "@tanstack/react-query";



const useObjectDetectionUpdate = () => {
    const { refetch } = useObjectDetectionList();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ["object-detection-update"],
        mutationFn: updateObjectDetection,
        onSuccess: () => {
            refetch();
        }
    });
    return { mutate, isPending, isSuccess };
}

export default useObjectDetectionUpdate;
