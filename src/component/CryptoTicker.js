import React, { useState, useEffect } from "react";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
// import Ticker from "react-ticker";
import Bottleneck from "bottleneck";

const CryptoTicker = () => {
  const { data, setData } = useState("");

  //   const cryptoApiTicker = `https://api.coingecko.com/api/v3/search/trending`;

  const limiter = new Bottleneck({
    reservoir: 100, // initial value
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 1000, // must be divisible by 250

    // also use maxConcurrent and/or minTime for safety
    maxConcurrent: 1,
    minTime: 333, // pick a value that makes sense for your use case
  });

  //   const result = await limiter.schedule(() => makeApiCall());

  const makeAPICall = async () => {
    const res = await fetch(cryptoApiTicker);
    const rawData = await res.json();
    // console.log(rawData);
    setData = rawData;
  };

  //   console.log(data);

  //   const throttledApiCall = limiter.wrap(makeAPICall);

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
        {() => <GetRatesFromAPI />}
      </Ticker>
    </div>
  );
};

export default CryptoTicker;