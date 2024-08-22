import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const addTransaksiIntrabank = async (input) => {
  const result = await http.post(API_ENDPOINT.TRANSFER_INTRABANK, input);
  return result.data
};

const useAddTransaksiIntrabank = () => {
  return useMutation({
    mutationFn: addTransaksiIntrabank,
  });
};

export { addTransaksiIntrabank, useAddTransaksiIntrabank };
