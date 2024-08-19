import { useMutation } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const generateTransactionQR = async (input) => {
    return await httpSecond.get(API_ENDPOINT.QR_TRANSACTION_GENERATEQR, input);
};

const useGenerateTransactionQR = () => {
    return useMutation({
        mutationFn: generateTransactionQR,
    });
};

export { generateTransactionQR, useGenerateTransactionQR };