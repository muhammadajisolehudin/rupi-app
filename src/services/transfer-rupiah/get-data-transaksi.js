// import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const getDataTransaksi = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http
    .get(_key, { params: _params })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error geting data:", error);
      return null;
    });

  return data.data;
};

const useGetDataTransaksi = (options) => {
//   return useQuery([API_ENDPOINT.DATA_CLASS, options], getDataTransaksi);
   return useQuery({
     queryKey: [API_ENDPOINT.TRANSFER_DESTINATIONS, options],
     queryFn: () => getDataTransaksi(),
   });
};

export { getDataTransaksi, useGetDataTransaksi };
