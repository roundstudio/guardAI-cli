import api from "../../../config/api";
import { ContactFormData } from "../types";
import { toast } from 'react-toastify';

const updateContact = async (contactData: ContactFormData): Promise<ContactFormData> => {
    try {
        const response = await api.put<ContactFormData>(`api/contact/${id}/`, contactData);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در بروزرسانی پیام: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در بروزرسانی پیام: مشخص نشده");
        }
        throw error;
    }
};

export default updateContact;
