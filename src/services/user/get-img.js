import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http";

const getImg = async ({ queryKey }) => {
  const [_key, pathParams] = queryKey;
  const result = await http.get(`${_key}/${pathParams}`, {
    responseType: "blob",
  });
  return result.data; 
};

const useGetImg = (imgPath) => {
  return useQuery({
    queryKey: [`https://api.rupiapp.me`, imgPath],
    queryFn: getImg,
    select: (data) => {
      const imageUrl = URL.createObjectURL(data);
      return imageUrl;
    },
  });
};

export { getImg, useGetImg };
