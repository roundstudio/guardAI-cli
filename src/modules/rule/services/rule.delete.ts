import { toast } from "react-toastify";
import api from "../../../config/api";
import { AxiosError } from "axios";



const ruleDelete = async (id: number): Promise<void> => {
    const response = await api.delete(`/rule/${id}`);
    try {
        toast.success("حذف با موفقیت انجام شد");
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response?.data.message);
        } else {
            toast.error("خطایی نامشخص رخ داده است");
        }
        throw error;
    }
}

export default ruleDelete;

