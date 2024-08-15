import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const changeUserPhone = async (input) => {
  return await http.patch(API_ENDPOINT.CHANGE_USER_PHONE, input);
};

const useChangeUserPhone = () => {
  return useMutation({
    mutationFn: changeUserPhone,
  });
};

export { changeUserPhone, useChangeUserPhone };
