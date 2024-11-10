import api from "../../../config/api";
import { Camera } from "../types";


const getCamerasList = async (): Promise<Camera[]> => {
    const response = await api.get<Camera[]>(`api/cameras/`);
    return response.data;
};

export default getCamerasList;