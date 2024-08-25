import { useQuery } from "@tanstack/react-query";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import axios from "axios";


// Fungsi untuk mengambil bukti mutasi dengan URL yang di-hardcode
const downloadBuktiMutasi = async ({ queryKey }) => {
  const [_key, pathParams] = queryKey;

  // Hardcode URL API Anda di sini
  
  const url = `${_key}/${pathParams}/pdf`;
  // const url = `http://0.tcp.ap.ngrok.io:19156/api/v1/mutations/${pathParams}/pdf`;

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
  // Mengembalikan data dalam bentuk blob
  // return response.blob();
};

// Hook yang menggunakan `useQuery` dengan URL hardcoded
const useDownloadBuktiMutasi = (idTransaksi) => {
  return useQuery({
    queryKey: ['http://0.tcp.ap.ngrok.io:19156/api/v1/mutations', idTransaksi],
    queryFn: downloadBuktiMutasi,
  });
};

export { downloadBuktiMutasi, useDownloadBuktiMutasi };
