import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

// Fungsi untuk mengambil bukti mutasi dengan URL yang di-hardcode
const downloadEstatment = async ({ queryKey }) => {
  const [_key, params] = queryKey;

  // Jika params adalah objek, konversi ke query string
  const queryParams = new URLSearchParams(params).toString();

//   const url = `${_key}?${queryParams}`;
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
      "http://0.tcp.ap.ngrok.io:19156/api/v1/mutations/estatement?dateRange[start]=2024-08-22&dateRange[end]=2024-08-24",
      params,
    ],
    queryFn: downloadEstatment,
  });
};

export { downloadEstatment, useDownloadEstatment };
