import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";
import { API_ENDPOINT } from "../../utils/api-endpoints";

const addFavorite = async ({id, input}) => {
    const url = `${API_ENDPOINT.TRANSFER_FAVORITE}/${id}`;
    return await http.patch(url, input);
};

const useAddFavorite = () => {
  return useMutation({
    mutationFn: addFavorite,
  });
};

export { addFavorite, useAddFavorite };
