import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const addDataRekening = async (input) => {
  return await http.post(API_ENDPOINT.TRANSFER_DESTINATIONS, input);
};

const useAddDataRekening = () => {
  return useMutation({
    mutationFn: addDataRekening,
  });
};

export { addDataRekening, useAddDataRekening };
