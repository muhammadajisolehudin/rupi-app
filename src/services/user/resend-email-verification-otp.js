import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const resendEmailVerificationOtp = async () => {
  return await http.post(API_ENDPOINT.USER_RESEND_EMAIL);
};

const useResendEmailVerificationOtp = () => {
  return useMutation({
    mutationFn: resendEmailVerificationOtp,
  });
};

export { resendEmailVerificationOtp, useResendEmailVerificationOtp };
