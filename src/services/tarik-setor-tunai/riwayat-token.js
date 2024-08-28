import { useQuery } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getTransactionHistory = async () => {
  try {
    const response = await httpSecond.get(
      API_ENDPOINT.TRKSTR_TRANSACTION_TOKENHISTORY
    );
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
};

const useTransactionHistory = () => {
  return useQuery({
    queryKey: ["transactionHistory"],
    queryFn: getTransactionHistory,
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
};

export { getTransactionHistory, useTransactionHistory };
