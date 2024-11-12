import { useMutation } from "@tanstack/react-query";
import { createCamera } from "../services";
import useCameraList from "./useCameraList";

const useCameraCreate = () => {
    const { refetch } = useCameraList();

    const { mutate, isPending, isError, error, isSuccess } = useMutation({
        mutationFn: createCamera,
        mutationKey: ["createCamera"],
        onSuccess: () => {
            refetch();
        },
    });

    return { mutate, isPending, isError, error, isSuccess };
};

export default useCameraCreate;
