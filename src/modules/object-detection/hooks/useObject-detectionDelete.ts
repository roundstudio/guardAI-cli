import { useMutation } from "@tanstack/react-query";
import { deleteObjectDetection } from "../services";
import { useObjectDetectionList } from ".";




const useObjectDetectionDelete = () => {
    const { refetch } = useObjectDetectionList();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ["object-detection-delete"],
        mutationFn: deleteObjectDetection,
        onSuccess: () => {
            refetch();
        }
    });
    return { mutate, isPending, isSuccess };
}

export default useObjectDetectionDelete;
