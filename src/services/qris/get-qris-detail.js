import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getQrisDetail = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const result = await http.get(`${_key}/${params}`);
  
  return result.data.data;
};

const useGetQrisDetail = (options) => {
    console.log("kiriman qris:", options)
  return useQuery({
    queryKey: [API_ENDPOINT.TRANSFER_QRIS, options],
    queryFn: getQrisDetail
  });
};

export { getQrisDetail, useGetQrisDetail };
