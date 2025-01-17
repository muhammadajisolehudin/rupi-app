import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const changeUserProfile = async (input) => {
  return await http.put(API_ENDPOINT.USER_PROFILE, input);
};

const useChangeUserProfile = () => {
  return useMutation({
    mutationFn: changeUserProfile,
  });
};

export { changeUserProfile, useChangeUserProfile };
