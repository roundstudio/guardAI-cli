import { useMutation } from "@tanstack/react-query";
import { ruleCreate } from "../services";
import { RuleSubmitData, Rule } from "../types/rule.type";




const useRuleCreate = () => {
    const { data, isPending, error, mutate , isSuccess} = useMutation<Rule, Error, RuleSubmitData>({
        mutationKey: ["rule-create"],
        mutationFn: ruleCreate,
    });
    return { data, isPending, error, mutate, isSuccess };
}

export default useRuleCreate;
