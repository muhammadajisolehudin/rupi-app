import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const changeUserEmail = async (input) => {
  return await http.patch(API_ENDPOINT.CHANGE_USER_EMAIL, input);
};

const useChangeUserEmail = () => {
  return useMutation({
    mutationFn: changeUserEmail,
  });
};

export { changeUserEmail, useChangeUserEmail };
