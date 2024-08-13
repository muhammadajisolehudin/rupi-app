import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

const Signout = async () => {
  await http.post(API_ENDPOINT.AUTH_SIGNOUT);
  // Hapus token dari cookies
  CookiesStorage.remove(CookiesKey.AuthToken, CookiesKey.User);
};

const useSignout = () => {
  console.log("keluar yuk")
  return useMutation({
    mutationFn:Signout
  });
};

export { Signout, useSignout };
