import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyOtpResend = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_VERIFY_RESEND, input);
};

const useVerifyOtpResend = () => {
  return useMutation({
    mutationFn: verifyOtpResend
  });
};

export { verifyOtpResend, useVerifyOtpResend };
