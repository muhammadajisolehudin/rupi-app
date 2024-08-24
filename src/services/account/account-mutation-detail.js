import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getMutationDetail = async ({ queryKey }) => {
  const [_key, pathParams] = queryKey;
  const result = await http.get(`${_key}/${pathParams}`);

  return result.data.data;
};

const useGetMutationDetail = (idTransaksi) => {
  return useQuery({
    queryKey: [API_ENDPOINT.ACCOUNT_MUTATIONS, idTransaksi],
    queryFn: getMutationDetail,
  });
};

export { getMutationDetail, useGetMutationDetail };
