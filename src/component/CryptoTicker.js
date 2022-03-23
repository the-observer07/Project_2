import React, { useState, useEffect } from "react";
import Ticker, { FinancialTicker } from "nice-react-ticker";
// import Ticker from "react-ticker";
import Bottleneck from "bottleneck";
import { type } from "@testing-library/user-event/dist/type";

const CryptoTicker = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  const cryptoApiTicker = `https://api.coingecko.com/api/v3/exchanges/binance/tickers`;

  const limiter = new Bottleneck({
    reservoir: 100, // initial value
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 1000, // must be divisible by 250

    // also use maxConcurrent and/or minTime for safety
    maxConcurrent: 1,
    minTime: 333, // pick a value that makes sense for your use case
  });

  //   const result = await limiter.schedule(() => makeApiCall());

  useEffect(() => {
    throttledApiCall();
    filterData();
  }, []);

  const fetchAPI = async () => {
    const res = await fetch(cryptoApiTicker);
    // console.log(res);
    const rawData = await res.json();
    // console.log(rawData);
    setData(rawData.tickers);
  };
  // console.log(data);

  const filterData = () => {
    const filteredData = data.map((element, index) => {
      return (
        <div key={index}>
          symbol: {element.base}, price: {element.last}, priceBTC:{" "}
          {element.converted_last.btc},
        </div>
      );
    });
    return filteredData;
    // setType(filteredData);
    // console.log(filteredData);
  };
  // console.log(type);

  const throttledApiCall = limiter.wrap(fetchAPI);

  // const res = await fetch(cryptoApiTicker);
  // const rawData = await res.json();
  // console.log(rawData);
  // setData = rawData;

  //   const fet
  //   console.log(data);

  //   const allThePromises = data.map((item) => {
  //     return throttledApiCall();
  //   });
  //   const rawData = await limiter.schedule();

  // const filteredData = rawData.map((element, index) => {
  //   return {
  //     symbol: duck.coins.symbol,
  //     priceBtc: duck.coins.price_btc,
  //   };
  // });
  // setType(filteredData);

  // const filteredData = rawDataArray.map((duck) => {
  //   return {
  //     price: duck.data.rates,
  //     unit: duck.data.unit,
  //   };
  // });
  // setType(filteredData);

  return (
    <div>
      <Ticker offset="run-in" speed={10}>
        {filterData()}
      </Ticker>
    </div>
  );
};

export default CryptoTicker;
