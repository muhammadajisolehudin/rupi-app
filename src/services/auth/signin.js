import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const Signin = async (input) => {
  console.log("ok sini juga");
  const result = await http.post(API_ENDPOINT.AUTH_SIGNIN, input);
  CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
  CookiesStorage.set(CookiesKey.User, decodeURIComponent(result.data.data.user.email));
  return result;
};

const useSignin = () => {
  const { mutate } = useMutation(Signin);

  console.log("masuk sini woyy");

  return mutate;
};

export { Signin, useSignin };
