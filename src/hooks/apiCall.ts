import { useState, useEffect, useCallback } from 'react';

function useApiCall<T>(apiCallback: () => Promise<T>, deps: Array<any>): [T, boolean, any, () => void] {
  const [data, setData] = useState<T>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const cb = useCallback(apiCallback, deps);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const data = await cb();
      setData(data);
    } catch (e) {
      setError(e);
      setData(undefined);
    } finally {
      setIsLoading(false);
    }
  }, [cb]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, isLoading, error, fetchData];
}

export default useApiCall;
