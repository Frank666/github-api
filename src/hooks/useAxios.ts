import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.github.com";

const useAxios = <T>(axiosParams: AxiosRequestConfig, execute = true) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === "GET" || (axiosParams.method === "get" && execute)
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result: AxiosResponse<T> = await axios.request(params);
      setResponse(result.data);
      setError(undefined);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (
      axiosParams.method === "GET" ||
      (axiosParams.method === "get" && execute)
    ) {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useAxios;
