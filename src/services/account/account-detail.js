<<<<<<< HEAD

=======
>>>>>>> 4cb55ca3883a388c59bf133026767fecff0bbc41
import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const getAccountDetail = async ({ queryKey }) => {
  const [_key] = queryKey;
<<<<<<< HEAD
  const result = await http.get(_key);
  return result.data.data;
};

const useGetAccountDetail = () => {
  return useQuery({
    queryKey: [API_ENDPOINT.ACCOUNT_DETAIL],
=======
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
>>>>>>> 4cb55ca3883a388c59bf133026767fecff0bbc41
    queryFn: getAccountDetail,
  });
};

export { getAccountDetail, useGetAccountDetail };
<<<<<<< HEAD

=======
>>>>>>> 4cb55ca3883a388c59bf133026767fecff0bbc41
