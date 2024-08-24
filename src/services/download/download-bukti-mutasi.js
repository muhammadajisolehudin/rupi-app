import { useQuery } from "@tanstack/react-query";
import httpSecond from "../../utils/http-second";
import { API_ENDPOINT } from "../../utils/api-endpoints";


const downloadBuktiMutasi = async ({ queryKey }) => {
  const [_key, pathParams] = queryKey;
  const result = await httpSecond.get(`${_key}/${pathParams}/pdf`);


  return result.data.data;
};

const useDownloadBuktiMutasi = (idTransaksi) => {
  return useQuery({
    queryKey: [API_ENDPOINT.DOWNLOAD_BUKTI_MUTASI, idTransaksi],
    queryFn: downloadBuktiMutasi,
  });
};
//baru sampe sini 
export { downloadBuktiMutasi, useDownloadBuktiMutasi };
