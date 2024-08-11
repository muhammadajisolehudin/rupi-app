
import { useQuery } from "@tanstack/react-query";
// import { API_ENDPOINT } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getAccountDetail = async ({ queryKey }) => {
  
  const [_key] = queryKey;
  try {
    const result = await http.get(_key);
    return result.data.data;
  } catch (error) {
    console.error("Error in getAccountDetail:", error);
    throw error; 
  }
};

const useGetAccountDetail = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.ACCOUNT_DETAIL, options],
    queryFn: getAccountDetail,
  });
};

export { getAccountDetail, useGetAccountDetail };

