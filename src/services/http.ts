import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchData = async <T>(path: string): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(path);
  return response.data;
};
