import { useQuery } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getTransactionHistory = async ({ queryKey }) => {
    const [, dateStart, dateEnd] = queryKey;
    try {
        const params = new URLSearchParams();
        if (dateStart) params.append('startDate', new Date(dateStart).toISOString());
        if (dateEnd) params.append('endDate', new Date(dateEnd).toISOString());

        const response = await httpSecond.get(`${API_ENDPOINT.TRKSTR_TRANSACTION_TOKENHISTORY}?${params.toString()}`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
};

const useTransactionHistory = (dateStart, dateEnd) => {
    return useQuery({
        queryKey: ['transactionHistory', dateStart, dateEnd],
        queryFn: getTransactionHistory,
        onError: (error) => {
            console.error('Error fetching data:', error);
        },
        enabled: Boolean(dateStart && dateEnd)
    });
};

export { getTransactionHistory, useTransactionHistory };
