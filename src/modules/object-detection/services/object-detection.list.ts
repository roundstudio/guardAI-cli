import { toast } from "react-toastify";
import api from "../../../config/api";
import { AxiosError } from "axios";
import { UserObjectRequest } from "../types";



const getObjectDetectionList = async (): Promise<UserObjectRequest[]> => {
    const response = await api.get("api/object-detection/");
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

export default getObjectDetectionList;
