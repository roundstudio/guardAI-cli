import api from "../../../config/api";
import { Camera } from "../types";
import { toast } from 'react-toastify';



const createCamera = async (cameraData: Camera): Promise<Camera> => {
    try {
        const response = await api.post<Camera>(`api/cameras/`, cameraData);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در ایجاد دوربین: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در ایجاد دوربین: مشخص نشده");
        }
        throw error;
    }
};

export default createCamera;