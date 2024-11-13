import { useMutation } from "@tanstack/react-query";
import { ruleDelete } from "../services";



const useRuleDelete = () => {
    const { data, isPending, error, mutate } = useMutation({
        mutationKey: ["rule-delete"],
        mutationFn: ruleDelete,
    });
    return { data, isPending, error, mutate };
}

export default useRuleDelete;
