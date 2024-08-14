import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getTransaksiDetail = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const result = await http.get(`${_key}/${params}`);

  return result.data.data;
};

const useGetTransaksiDetail = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.TRANSFER_DESTINATIONS, options],
    queryFn: getTransaksiDetail,
  });
};

export { getTransaksiDetail, useGetTransaksiDetail };
