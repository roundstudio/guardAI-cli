import { useMutation } from "@tanstack/react-query";
import { ruleUpdate } from "../services";
import { RuleSubmitData, Rule } from "../types/rule.type";



const useRuleUpdate = () => {
    const { data, isPending, error, mutate, isSuccess } = useMutation<Rule, Error, RuleSubmitData>({
        mutationKey: ["rule-update"],
        mutationFn: ruleUpdate,
    });
    return { data, isPending, error, mutate, isSuccess };
}

export default useRuleUpdate;
