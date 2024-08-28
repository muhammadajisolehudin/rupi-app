import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import httpSecond from "../../utils/http-second";

const getWaitingQRHistory = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  return result.data.data;
};

const useGetWaitingQRHistory = (params) => {
  return useQuery({
    queryKey: [API_ENDPOINT.QR_TRANSACTION_WAITING, params],
    queryFn: getWaitingQRHistory,
  });
};

export { getWaitingQRHistory, useGetWaitingQRHistory };
