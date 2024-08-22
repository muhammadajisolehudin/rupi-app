import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const resendPhoneVerificationOtp = async () => {
  return await http.post(API_ENDPOINT.USER_RESEND_NUMBER);
};

const useResendPhoneVerificationOtp = () => {
  return useMutation({
    mutationFn: resendPhoneVerificationOtp,
  });
};

export { resendPhoneVerificationOtp, useResendPhoneVerificationOtp };
