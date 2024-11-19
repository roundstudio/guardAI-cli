import { useQuery } from '@tanstack/react-query';
import listTelegrams from '../services/telegram.list';


const useTelegramList = () =>{
    const {data, isPending, refetch, error} = useQuery({
        queryKey: ["telegrams"],
        queryFn: listTelegrams
    })

    return {data, isPending, refetch, error}
}


export default useTelegramList;