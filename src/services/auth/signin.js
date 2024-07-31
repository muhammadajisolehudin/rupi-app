import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { API_ENDPOINT } from "../../utils/api-endpoints";



const login = async (input) => {
  // console.log("ok masuk sipp : ", input)
  
  const result = await http.post(API_ENDPOINT.AUTH_SIGNIN, input);
  CookiesStorage.set(CookiesKey.AuthToken, result.data.data.access_token);
  CookiesStorage.set(CookiesKey.User, decodeURIComponent(result.data.data.email));
  return result.data;
};

const useLogin = () => {
  return useMutation({
    mutationFn: login,
    // onSuccess: (data) => {
    //   console.log("Login successful, response data:", data); // Debug log
    //   alert("Login successful!");
    // },
    // onError: (error) => {
    //   console.error(
    //     "Login failed, error response:",
    //     error.response ? error.response.data : error.message
    //   ); // Debug log
    //   alert("Login failed. Please check your credentials.");
    // },
  });
};

export { login, useLogin };
