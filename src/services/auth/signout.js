import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const RegisterOTP = async () => {
  return await http.post(API_ENDPOINT.AUTH_SIGNOUT);
};

const useRegisterOTP = () => {
  return useMutation(RegisterOTP);
};

export { RegisterOTP, useRegisterOTP };
