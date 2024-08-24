import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyUserPhone = async (input) => {
  return await http.post(API_ENDPOINT.VERIFY_PHONE_OTP, input);
};

const useVerifyUserPhone = () => {
  return useMutation({
    mutationFn: verifyUserPhone,
  });
};

export { verifyUserPhone, useVerifyUserPhone };
