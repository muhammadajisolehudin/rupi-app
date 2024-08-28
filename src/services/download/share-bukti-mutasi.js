import { useQuery } from "@tanstack/react-query";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import axios from "axios";

const shareBuktiMutasi = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const authToken = CookiesStorage.get(CookiesKey.AuthToken);
  try {
    const response = await axios.get(_key, {
      params: params,
      headers: {
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
const useShareBuktiMutasi = (idTransaksi) => {
  return useQuery({
    queryKey: ["http://localhost:9000/api/v1/mutations/document", idTransaksi],
    queryFn: shareBuktiMutasi,
  });
};

export { shareBuktiMutasi, useShareBuktiMutasi };
