import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getAccountDetail = async ({ queryKey }) => {
  const [_key] = queryKey;
  const result = await http.get(_key);
  return result.data.data;
};

const useGetAccountDetail = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.ACCOUNT_DETAIL],
    queryFn: getAccountDetail,
  });
};

export { getAccountDetail, useGetAccountDetail };
