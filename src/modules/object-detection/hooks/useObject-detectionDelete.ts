import { useMutation } from "@tanstack/react-query";
import { deleteObjectDetection } from "../services";




const useObjectDetectionDelete = () => {
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ["object-detection-delete"],
        mutationFn: deleteObjectDetection,
    });
    return { mutate, isPending, isSuccess };
}

export default useObjectDetectionDelete;
