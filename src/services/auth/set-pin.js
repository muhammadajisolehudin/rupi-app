import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const setPin = async (input) => {
  return await http.post(API_ENDPOINT.AUTH_SET_PIN, input);
};

const useSetPin = () => {
  return useMutation(setPin);
};

export { setPin, useSetPin };
