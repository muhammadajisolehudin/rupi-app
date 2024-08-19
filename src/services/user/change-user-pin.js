
import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const changeUserPin = async ({ headers, input }) => {
//   const result = await http.patch(API_ENDPOINT.CHANGE_USER_PIN, input, {
//     params,
//   });

const result = await http.patch(API_ENDPOINT.CHANGE_USER_PIN, input, {
  headers: headers,
});
  return result.data;
};

const useChangeUserPin = () => {
  return useMutation({
    mutationFn: changeUserPin,
  });
};


export { changeUserPin, useChangeUserPin };



