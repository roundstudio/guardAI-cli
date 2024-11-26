import api from "../../../config/api";
import { ContactFormData } from "../types";

const listContacts = async (): Promise<ContactFormData[]> => {
    const response = await api.get<ContactFormData[]>('api/contact/');
    return response.data;
};

export default listContacts;
