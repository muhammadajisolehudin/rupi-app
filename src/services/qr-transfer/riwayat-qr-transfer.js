import { useQuery } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getQRTransferHistory = async ({ page = 1, size = 50, category = '', mutationType = '', start = '', end = '' }) => {
    try {
        const params = { page, size, category, mutationType, start, end };
        const response = await httpSecond.get(API_ENDPOINT.GET_ALL_MUTATIONS, { params });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
};

const useQRTransferHistory = (queryParams) => {
    return useQuery({
        queryKey: ['mutations', queryParams],
        queryFn: () => getQRTransferHistory(queryParams),
        onError: (error) => {
            console.error('Error fetching mutations:', error);
        },
    });
};

export { getQRTransferHistory, useQRTransferHistory };
