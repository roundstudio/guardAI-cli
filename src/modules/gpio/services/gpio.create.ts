import { toast } from "react-toastify";
import api from "../../../config/api";
import { Gpio } from "../types";

const createGpio = async (gpio: Gpio): Promise<Gpio> => {
    const response = await api.post("/api/gpio/", gpio);
    try {
    toast.success("gpio با موفقیت ایجاد شد");
    return response.data;
    } catch (error) {
        toast.error("مشکلی نامشخص رخ داده است");
        throw error;
    }
};

export default createGpio;

