import { Gpio } from "../types";
import api from "../../../config/api";
import { toast } from "react-toastify";



const updateGpio = async (gpio: Gpio): Promise<Gpio> => {
    const response = await api.put(`/api/gpio/${gpio.id}/`, gpio);
    try {
        toast.success("gpio با موفقیت ویرایش شد");
        return response.data;
    } catch (error) {
        toast.error("مشکلی نامشخص رخ داده است");
        throw error;
    }
};

export default updateGpio;
