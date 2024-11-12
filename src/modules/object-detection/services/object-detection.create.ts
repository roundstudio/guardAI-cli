import { toast } from "react-toastify";
import api from "../../../config/api";
import { UserObjectRequest } from "../types";
import { AxiosError } from "axios";



const createObjectDetection = async (objectDetection: UserObjectRequest): Promise<UserObjectRequest> => {
    const response = await api.post("api/object-detection/", objectDetection);
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

export default createObjectDetection;
