import { createGpio } from "../services";
import { useMutation } from "@tanstack/react-query";



const useGpioCreate = () => {
    const { mutate, isPending, error, isSuccess } = useMutation({
        mutationKey: ["create-gpio"],
        mutationFn: createGpio,
    });
    return { mutate, isPending, error, isSuccess };
};

export default useGpioCreate;

