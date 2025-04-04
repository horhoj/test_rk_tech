import { axiosInstance } from '~/api/apiTransport';
import { FetchRandomCatResponseItem } from '~/api/cats.api.types';

export const fetchRandomCat = async () => {
  const res = await axiosInstance.request<FetchRandomCatResponseItem[]>({ method: 'get', url: '/images/search' });
  return res.data[0];
};
