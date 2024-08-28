import { useQuery } from '@tanstack/react-query';
import { CookiesKey, CookiesStorage } from '../../utils/cookies';
import axios from 'axios';

// Fungsi untuk mengambil bukti mutasi dengan URL yang di-hardcode
const downloadBuktiMutasi = async ({ queryKey }) => {
  const [_key, params] = queryKey;

  const authToken = CookiesStorage.get(CookiesKey.AuthToken);
  try {
    const response = await axios.get(_key, {
      params: params,
      responseType: 'blob', // Set tipe responsenya menjadi blob
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
    });

    return response.data; 
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Network response was not ok'
    );
  }
};

const useDownloadBuktiMutasi = (idTransaksi) => {
  return useQuery({
    queryKey: ['http://localhost:9000/api/v1/mutations/document', idTransaksi],
    queryFn: downloadBuktiMutasi,
  });
};

export { downloadBuktiMutasi, useDownloadBuktiMutasi };
