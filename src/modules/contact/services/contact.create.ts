import api from "../../../config/api";
import { ContactFormData } from "../types";
import { toast } from 'react-toastify';

const createContact = async (contactData: ContactFormData): Promise<ContactFormData> => {
    try {
        const response = await api.post<ContactFormData>(`api/contact/`, contactData);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error("خطا در ایجاد پیام: " + (error.message || "مشخص نشده"));
        } else {
            toast.error("خطا در ایجاد پیام: مشخص نشده");
        }
        throw error;
    }
};

export default createContact;
