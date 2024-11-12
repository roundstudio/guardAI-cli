import { updateObjectDetection } from "../services";
import { useMutation } from "@tanstack/react-query";



const useObjectDetectionUpdate = () => {
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ["object-detection-update"],
        mutationFn: updateObjectDetection,
    });
    return { mutate, isPending, isSuccess };
}

export default useObjectDetectionUpdate;
