import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints"

const generateQrisCpmTransaction = async (input) => {
  const result = await http.post(
    API_ENDPOINT.GENERATE_QRIS_CPM_TRANSACTION,
    input
  );
  return result.data.data
};

const useGenerateQrisCpmTransaction = () => {
  return useMutation({
    mutationFn: generateQrisCpmTransaction,
  });
};

export { generateQrisCpmTransaction, useGenerateQrisCpmTransaction };
