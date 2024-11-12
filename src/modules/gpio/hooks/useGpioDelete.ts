import { useMutation } from "@tanstack/react-query";
import { deleteGpio } from "../services";


const useGpioDelete = () => {
    const { mutate, isPending, error } = useMutation({
        mutationKey: ["delete-gpio"],
        mutationFn: deleteGpio,
    });
    return { mutate, isPending, error };
};

export default useGpioDelete;
