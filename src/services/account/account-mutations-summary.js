import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getMutationsSummary = async ({ queryKey }) => {
  const [_key, params] = queryKey;
  const result = await http.get(_key, { params });
  return result.data.data;
};

const useGetMutationsSummary = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.ACCOUNT_MUTATIONS_SUMMARY, options],
    queryFn: getMutationsSummary,
  });
};

export { getMutationsSummary, useGetMutationsSummary };



