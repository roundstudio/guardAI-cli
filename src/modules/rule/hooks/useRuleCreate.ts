import { useMutation } from "@tanstack/react-query";
import { ruleCreate } from "../services";




const useRuleCreate = () => {
    const { data, isPending, error, mutate } = useMutation({
        mutationKey: ["rule-create"],
        mutationFn: ruleCreate,
    });
    return { data, isPending, error, mutate };
}

export default useRuleCreate;
