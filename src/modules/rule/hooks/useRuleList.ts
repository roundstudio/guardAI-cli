import { useQuery } from "@tanstack/react-query";
import { ruleList } from "../services";




const useRuleList = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ["rule-list"],
        queryFn: ruleList,
    });
    return { data, isPending, error };
}

export default useRuleList;
