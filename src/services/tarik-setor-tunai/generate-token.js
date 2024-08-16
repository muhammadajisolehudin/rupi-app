import { useMutation } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const generateTransactionToken = async (input) => {
    try {
        const response = await httpSecond.post(API_ENDPOINT.TRKSTR_TRANSACTION_GENERATETOKEN, input);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
};

const useGenerateTransactionToken = () => {
    return useMutation({
        mutationFn: generateTransactionToken,
    });
};

export { generateTransactionToken, useGenerateTransactionToken };
