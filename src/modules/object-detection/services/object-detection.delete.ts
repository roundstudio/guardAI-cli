import { toast } from "react-toastify";
import api from "../../../config/api";
import { AxiosError } from "axios";



const deleteObjectDetection = async (id: number): Promise<void> => {
    const response = await api.delete(`api/object-detection/${id}/`);
    try {
        toast.success("عملیات با موفقیت انجام شد");
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response?.data.detail);
        }
        throw error;
    }
}

export default deleteObjectDetection;
