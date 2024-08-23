// import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const getTransferDestination = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  try {
    const result = await http.get(_key, { params });
    return result.data.data;
  } catch (error) {
    console.error("Error in getAccountDetail:", error);
    throw error;
  }
};

const useGetTransferDestination = (params) => {
   return useQuery({
     queryKey: [API_ENDPOINT.TRANSFER_DESTINATIONS, params],
     queryFn: getTransferDestination,
   });
};

export { getTransferDestination, useGetTransferDestination };
