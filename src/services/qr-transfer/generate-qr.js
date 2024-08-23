import { useMutation } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const generateTransactionQR = async (input = {}) => {
    try {
        const response = await httpSecond.post(API_ENDPOINT.QR_TRANSACTION_GENERATEQR, {
            amount: input.amount || 0,
            ...input,
        });
        console.log(response);
        return response;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
    }
};

const useGenerateTransactionQR = () => {
    return useMutation({
        mutationFn: generateTransactionQR,
    });
};

export { generateTransactionQR, useGenerateTransactionQR };