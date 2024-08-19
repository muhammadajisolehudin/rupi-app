import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const verifyUserPassword = async (input) => {
  return await http.post(API_ENDPOINT.VERIFY_USER_PASSWORD, input);
};

const useVerifyUserPassword = () => {
  return useMutation({
    mutationFn: verifyUserPassword,
  });
};

export { verifyUserPassword, useVerifyUserPassword };
