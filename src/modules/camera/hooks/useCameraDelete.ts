import { useMutation } from "@tanstack/react-query";
import useCameraList from "./useCameraList";
import { deleteCamera } from "../services";



const useCameraDelete = () => {
    const { refetch } = useCameraList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationKey: ["deleteCamera"],
        mutationFn: deleteCamera,
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useCameraDelete;
