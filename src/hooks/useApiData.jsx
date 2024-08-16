import { useEffect, useState } from 'react';

const useApiData = (endpoint, url = 'https://api.themoviedb.org/3') => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${endpoint}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();
        setApiData(res);
      } catch (err) {
        setError(err.message); // Використовуємо err.message для отримання тексту помилки
      }
    };

    fetchData();
  }, [endpoint, url]);

  return { apiData, error };
};

export default useApiData;
