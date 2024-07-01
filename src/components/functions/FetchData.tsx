import axios from "axios";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const FetchData = (
  endpoint: string,
  setInitialState: (data: []) => void,
  loading: boolean,
  setLoading: (loading: boolean) => void,
  error: null,
  setError: (error: null) => void
) => {
  const cancelTokenSource = axios.CancelToken.source();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:3000/${endpoint}`)
          .then((response) => {
            setInitialState(response.data);
            setLoading(false);
          });
      } catch {
        (error: any) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else {
            setError(error);
            setLoading(false);
          }
        };
      }
    };
    fetchData();
    return () => {
      cancelTokenSource.cancel("Component unmounted");
    };
  }, [endpoint, cancelTokenSource]);

  if (loading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;
};

export default FetchData;
