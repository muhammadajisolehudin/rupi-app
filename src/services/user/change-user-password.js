import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const changeUserPassword = async ({ headers, input }) => {
  const result = await http.patch(API_ENDPOINT.CHANGE_USER_PASSWORD, input, {
    headers: headers,
  });
  return result.data;
};

const useChangeUserPassword = () => {
  return useMutation({
    mutationFn: changeUserPassword,
  });
};

export { changeUserPassword, useChangeUserPassword };



