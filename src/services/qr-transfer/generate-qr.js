import { useMutation } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const generateTransactionQR = async (input = {}) => {
    try {
        const response = await httpSecond.post(API_ENDPOINT.QR_TRANSACTION_GENERATEQR, input);
        console.log('Response:', response);
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        console.error('Error:', errorMessage);
        throw new Error(errorMessage);
    }
};

const useGenerateTransactionQR = () => {
    return useMutation({
        mutationFn: generateTransactionQR,
    });
};

export { generateTransactionQR, useGenerateTransactionQR };