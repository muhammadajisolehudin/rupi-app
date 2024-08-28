import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";


const downloadEstatment = async ({ queryKey }) => {
  const [_key, params] = queryKey;

  const queryParams = new URLSearchParams(params).toString();

const url = `${_key}`;
  // Ambil token otentikasi
  const authToken = CookiesStorage.get(CookiesKey.AuthToken);

  try {
    const response = await axios.get(url, {
      responseType: "blob", // Set tipe responsenya menjadi blob
      headers: {
        "Content-Type": "application/pdf",
        Authorization: authToken ? `Bearer ${authToken}` : "",
      },
    });

    return response.data; // Mengembalikan data dalam bentuk blob
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Network response was not ok"
    );
  }
};

// Hook yang menggunakan `useQuery` dengan URL hardcoded
const useDownloadEstatment = (params) => {
  return useQuery({
    queryKey: [
      "http://0.tcp.ap.ngrok.io:18464/api/v1/mutations/estatement?dateRange[start]=2024-08-25&dateRange[end]=2024-08-26",
      params,
    ],
    queryFn: downloadEstatment,
  });
};

export { downloadEstatment, useDownloadEstatment };
