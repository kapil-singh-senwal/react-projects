import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setPending(true);
      try {
        const response = await fetch(url, { ...options });
        if (!response.ok) throw new Error(response.statusText);

        const result = await response.json();
        if (isMounted) {
          setData(result);
          setError(null);
          setPending(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(`${error.message}. Some error occurred`);
          setPending(false);
        }
      }
    }

    if (url) fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]); // Only re-fetch if URL changes for now, as options is often a new object reference. 
  // Alternatively, if options needs to trigger a fetch, it must be memoized by the consumer.

  return { data, error, pending };
}
