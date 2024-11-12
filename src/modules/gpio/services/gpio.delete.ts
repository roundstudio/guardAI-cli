import api from "../../../config/api";
import { toast } from "react-toastify";


const deleteGpio = async (id: number): Promise<void> => {
    const response = await api.delete(`/api/gpio/${id}/`);
    try {
        toast.success("gpio با موفقیت حذف شد");
        return response.data;
    } catch (error) {
        toast.error("مشکلی نامشخص رخ داده است");
        throw error;
    }
};

export default deleteGpio;

