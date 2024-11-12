import { useMutation } from "@tanstack/react-query";
import { updateCamera } from "../services";
import useCameraList from "./useCameraList";




const useCameraUpdate = () => {
    const { refetch } = useCameraList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationKey: ["updateCamera"],
        mutationFn: updateCamera,
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
}

export default useCameraUpdate;