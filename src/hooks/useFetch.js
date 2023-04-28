import React, { useCallback, useState } from 'react'

const useFetch = () => {

  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getRequest = useCallback(async ({ url, payload, onSuccess }) => {

    setLoading(true);

    const response = await fetch(url);

    if (componentMounted) {

      const data = await response.json()

      onSuccess(data);
      setLoading(false);

    }

    return () => {
      componentMounted = false;
    }



  }, [])

  return {
    loading,
    getRequest
  }
}

export default useFetch;