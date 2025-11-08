import type { IReceiveVisitors } from "@/interfaces/receive-visitors"
import ExternalService from "@/services/external-service"
import { useQuery } from "@tanstack/react-query"


export const useFetchVisitors = (params: {}) => {

    return useQuery({
        queryKey: ["fetch-visitors", params],
        queryFn: ExternalService.GetVisitors<IReceiveVisitors>
    })

}