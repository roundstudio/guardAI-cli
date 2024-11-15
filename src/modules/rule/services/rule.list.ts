import { toast } from "react-toastify";
import api from "../../../config/api"
import { Rule } from "../types/rule.type";
import { AxiosError } from "axios";



const ruleList = async (): Promise<Rule[]> => {
    const response = await api.get<Rule[]>("api/rule/");
    try {
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response?.data.message);
        } else {
            toast.error("خطایی نامشخص رخ داده است");
        }
        throw error;
    }
}

export default ruleList;
