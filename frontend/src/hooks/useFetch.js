import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${url}`);
        const phoneData = await data.json();
        setData(phoneData);
      } catch (error) {
        console.log("Error: ", error);
      }
    })();
  }, []);

  return data;
}

export default useFetch;
