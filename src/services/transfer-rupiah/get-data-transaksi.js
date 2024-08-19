// import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const getDataTransaksi = async ({ queryKey }) => {
  const [_key] = queryKey;
  try {
    const result = await http.get(_key);
    return result.data.data;
  } catch (error) {
    console.error("Error in getAccountDetail:", error);
    throw error;
  }
};

const useGetDataTransaksi = () => {
   return useQuery({
     queryKey: [API_ENDPOINT.TRANSFER_DESTINATIONS],
     queryFn: getDataTransaksi,
   });
};

export { getDataTransaksi, useGetDataTransaksi };
