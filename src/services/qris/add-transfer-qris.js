import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const addTransferQris = async (input) => {
  return await http.post(API_ENDPOINT.TRANSFER_QRIS, input);
};

const useAddTransferQris = () => {
  return useMutation({
    mutationFn: addTransferQris,
  });
};

export { addTransferQris, useAddTransferQris };
