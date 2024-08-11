import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

const Signout = async () => {
  const response = await http.post(API_ENDPOINT.AUTH_SIGNOUT);

  // Cek apakah request berhasil
  if (response.status >= 200 && response.status < 300) {
    // Hapus token dari cookies
    CookiesStorage.remove(CookiesKey.AuthToken);
    CookiesStorage.remove(CookiesKey.User);
  } 
};

const useSignout = () => {
  console.log("keluar yuk")
  return useMutation({
    mutationFn:Signout
  });
};

export { Signout, useSignout };
