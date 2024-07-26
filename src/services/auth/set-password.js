import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";

import http from "../../utils/http";

const setPassword = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_OTP, input);
};

const useSetPassword = () => {
  return useMutation(setPassword);
};

export { setPassword, useSetPassword };
