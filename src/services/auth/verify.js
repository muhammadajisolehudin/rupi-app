import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyOtp = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_VERIFY, input);
};

const useVerifyOtp = () => {
  // return useMutation(verifyOtp);
  return useMutation({
    mutationFn: verifyOtp,
  });
};

export { verifyOtp, useVerifyOtp };
