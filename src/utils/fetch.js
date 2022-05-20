import { useState, useEffect } from "react";

/**
 * Function to fetch data from the API.
 * @param {string} URL // Using URL of the API to get the data.
 */

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          const result = await response.json();
          setData(result);
        } else {
          setError(true);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
