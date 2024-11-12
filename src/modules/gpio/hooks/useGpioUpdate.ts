import { useMutation } from "@tanstack/react-query";
import { updateGpio } from "../services";



const useGpioUpdate = () => {
    const { mutate, isPending, error, isSuccess } = useMutation({
        mutationKey: ["update-gpio"],
        mutationFn: updateGpio,
    });
    return { mutate, isPending, error, isSuccess };
};

export default useGpioUpdate;


