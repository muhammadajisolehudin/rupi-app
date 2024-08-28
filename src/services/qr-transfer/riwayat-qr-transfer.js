import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import httpSecond from "../../utils/http-second";

const getQRTransferHistory = async ({ queryKey }) => {
    try {
        const [_key, queryParams] = queryKey;
        const response = await httpSecond.get(_key, { params: queryParams });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
};

const useQRTransferHistory = (queryParams) => {
    return useQuery({
        queryKey: [API_ENDPOINT.GET_ALL_MUTATIONS, queryParams],
        queryFn: getQRTransferHistory,
    });
};

export { getQRTransferHistory, useQRTransferHistory };
