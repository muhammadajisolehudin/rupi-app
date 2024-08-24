import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getUserProfile = async ({ queryKey }) => {
  const [_key] = queryKey;
  const result = await http.get(_key);
  return result.data.data;
};

const useGetUserProfile = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.USER_PROFILE],
    queryFn: getUserProfile,
  });
};

export { getUserProfile, useGetUserProfile };
