import { useMutation } from "@tanstack/react-query"
import { createObjectDetection } from "../services";
import { useObjectDetectionList } from ".";



const useObjectDetectionCreate = () => {
    const { refetch } = useObjectDetectionList();
    const { mutate, isPending, isSuccess } = useMutation({
        mutationKey: ["object-detection-create"],
        mutationFn: createObjectDetection,
        onSuccess: () => {
            refetch();
        }
    });
    return { mutate, isPending, isSuccess };
}

export default useObjectDetectionCreate;
