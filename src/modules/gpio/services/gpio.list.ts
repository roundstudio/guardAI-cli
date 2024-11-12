import api from "../../../config/api";
import { Gpio } from "../types";



const getGpioList = async (): Promise<Gpio[]> => {
    const response = await api.get("/api/gpio/");
    return response.data;
};

export default getGpioList;
