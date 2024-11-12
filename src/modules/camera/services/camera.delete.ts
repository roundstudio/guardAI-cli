import api from "../../../config/api";
import { toast } from "react-toastify";

const deleteCamera = async (id: number): Promise<void> => {
  try {
    const response = await api.delete(`api/cameras/${id}/`);
    toast.success("دوربین با موفقیت حذف شد");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error("خطا در حذف دوربین: " + (error.message || "مشخص نشده"));
    } else {
      toast.error("خطا در حذف دوربین: مشخص نشده");
    }
    throw error;
  }
};

export default deleteCamera;
