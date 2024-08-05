import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { API_ENDPOINT } from "../../utils/api-endpoints";



const login = async (input) => {
  // console.log("ok masuk sipp : ", input)
  
  const result = await http.post(API_ENDPOINT.AUTH_SIGNIN, input);
  CookiesStorage.set(CookiesKey.AuthToken, result.data.data.access_token);
  CookiesStorage.set(
    CookiesKey.User,
    result.data.data.username,
    result.data.data.email,
    result.data.data.refresh_token
  );
  return result.data;
};

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export { login, useLogin };
