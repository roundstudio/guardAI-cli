import { toast } from "react-toastify";
import api from "../../../config/api";
import { UserObjectRequest } from "../types";
import { AxiosError } from "axios";



const updateObjectDetection = async (objectDetection: UserObjectRequest): Promise<UserObjectRequest> => {
    const response = await api.put(`api/object-detection/${objectDetection.id}/`, objectDetection);
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

export default updateObjectDetection;
