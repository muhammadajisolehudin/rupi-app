import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyOtp = async (input) => {
  const result = await http.post(API_ENDPOINT.AUTH_VERIFY, input);
  return result.data;
};

const useVerifyOtp = () => {
  // return useMutation(verifyOtp);
  return useMutation({
    mutationFn: verifyOtp,
  });
};

export { verifyOtp, useVerifyOtp };
