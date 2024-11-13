import { useMutation } from "@tanstack/react-query";
import { ruleUpdate } from "../services";



const useRuleUpdate = () => {
    const { data, isPending, error, mutate } = useMutation({
        mutationKey: ["rule-update"],
        mutationFn: ruleUpdate,
    });
    return { data, isPending, error, mutate };
}

export default useRuleUpdate;
