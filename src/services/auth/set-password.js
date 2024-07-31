import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http from "../../utils/http";


const setPassword = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_SET_PASSWORD, input);
};

const useSetPassword = () => {
  return useMutation({
    mutationFn: setPassword,
  });
};

export { setPassword, useSetPassword };
