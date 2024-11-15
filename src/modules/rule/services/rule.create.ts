

import { Rule, RuleSubmitData } from "../types/rule.type";
import api from "../../../config/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const ruleCreate = async (data: RuleSubmitData): Promise<Rule> => {
    const response = await api.post<Rule>("api/rule/", data);
    try {
        toast.success("ثبت با موفقیت انجام شد");
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

export default ruleCreate;
