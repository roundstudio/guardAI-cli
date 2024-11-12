import { toast } from "react-toastify";
import api from "../../../config/api";
import { Camera } from "../types";

const updateCamera = async (cameraData: Camera): Promise<Camera> => {
  try {
    const response = await api.put<Camera>(
      `api/cameras/${cameraData.id}/`,
      cameraData
    );
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

export default updateCamera;
