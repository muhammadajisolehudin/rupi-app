import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyUserEmail = async (input) => {
  return await http.post(API_ENDPOINT.VERIFY_EMAIL_OTP, input);
};

const useVerifyUserEmail = () => {
  return useMutation({
    mutationFn: verifyUserEmail,
  });
};

export { verifyUserEmail, useVerifyUserEmail };
