import { useMutation } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const generateTransactionToken = async (input) => {
    return await httpSecond.post(API_ENDPOINT.TRKSTR_TRANSACTION_GENERATETOKEN, input);
};

const useGenerateTransactionToken = () => {
    return useMutation({
        mutationFn: generateTransactionToken,
    });
};

export { generateTransactionToken, useGenerateTransactionToken };
