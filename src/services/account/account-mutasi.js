import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getMutations = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const result = await http.get(_key, { params });
  return result.data.data;
};

const useGetMutations = (params) => {
  return useQuery({
    queryKey: [API_ENDPOINT.ACCOUNT_MUTATIONS, params],
    queryFn: getMutations,
  });
};

export { getMutations, useGetMutations };
