import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";


const ForgotPassword = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_FORGOT_PASSWORD, input).then((result) => {
    return result;
  });
};

const useForgotPassword = () => {
  return useMutation(ForgotPassword);
};

export { ForgotPassword, useForgotPassword };
