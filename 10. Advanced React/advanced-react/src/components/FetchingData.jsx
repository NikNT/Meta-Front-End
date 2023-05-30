import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => setData(data.bpi.USD))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {data.length !== 0 ? (
        <div>
          <h1>Current BTC/USD Data</h1>
          <p>Code: {data.code}</p>
          <p>Symbol: {data.symbol}</p>
          <p>Rate: {data.rate}</p>
          <p>Description: {data.description}</p>
          <p>Rate Float: {data.rate_float}</p>
        </div>
      ) : (
        <h2>Fetching Data...</h2>
      )}
    </>
  );
};

export default FetchingData;
