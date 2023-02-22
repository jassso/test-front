import { useState, useEffect } from "react";

const useInvestmentsRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const fetching = async (config, callback) => {
    const { AxiosInstance, method, url, params } = config;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const response = await AxiosInstance({
        method,
        url,
        data: params,
        signal: ctrl.signal,
      });
      setData(response);
      callback(response);
    } catch (error) {
      callback(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return { data, loading, error, fetching };
};

export default useInvestmentsRequest;
