import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyUserPin = async (input) => {
  return await http.post(API_ENDPOINT.VERIFY_USER_PIN, input);
};

const useVerifyUserPin = () => {
  return useMutation({
    mutationFn: verifyUserPin,
  });
};

export { verifyUserPin, useVerifyUserPin };
