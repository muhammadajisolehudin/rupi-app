import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getTransaksiDetail = async ({ queryKey }) => {
  const [_key, pathParams] = queryKey;
  const result = await http.get(`${_key}/${pathParams}`);

  return result.data.data;
};

const useGetTransaksiDetail = (idTransaksi) => {
  return useQuery({
    queryKey: [API_ENDPOINT.TRANSFER_DESTINATIONS, idTransaksi],
    queryFn: getTransaksiDetail,
  });
};

export { getTransaksiDetail, useGetTransaksiDetail };
