import { useMutation } from "@tanstack/react-query"
import { createObjectDetection } from "../services";



const useObjectDetectionCreate = () => {
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ["object-detection-create"],
        mutationFn: createObjectDetection,
    });
    return { mutate, isPending, isSuccess };
}

export default useObjectDetectionCreate;
