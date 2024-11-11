

import api from "../../../config/api";
import { Camera } from "../types";


const getCamerasCreate = async (): Promise<Camera[]> => {
    const response = await api.post<Camera[]>(`api/cameras/`);
    return response.data;
};

export default getCamerasCreate;