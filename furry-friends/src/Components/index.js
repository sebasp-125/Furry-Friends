import axios from "axios";
import { useState, useEffect } from "react";

export function GetApi(URL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [URL]);

  return { data, error };
}
