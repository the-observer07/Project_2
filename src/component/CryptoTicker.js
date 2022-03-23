import React, { useState, useEffect } from "react";
import Ticker, { FinancialTicker } from "nice-react-ticker";
// import Ticker from "react-ticker";
import Bottleneck from "bottleneck";
import { type } from "@testing-library/user-event/dist/type";

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [type, setType] = useState("");

  const cryptoApiTicker = `https://api.coingecko.com/api/v3/exchanges/binance/tickers`;
  const financialNewsTicker =
    "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=HtQPxNVoj5bYyudPypD08TDxD7MdNbMkUB69DXJe";

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
    throttledNewsApiCall();
    // filterData();
  }, []);

  const fetchCryptoAPI = async () => {
    const res = await get(cryptoApiTicker);
    // console.log(res);
    const rawData = await res.json();
    // console.log(rawData);
    setCryptoData();
    const filteredData = rawData.tickers.map((element, index) => {
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

  console.log(data);

  const throttledApiCall = limiter.wrap(fetchCryptoAPI);

  const fetchFinancialNewsAPI = async () => {
    const res = await get(financialNewsTicker);
    const rawData = await res.json();
    console.log(rawData);
  };
  console.log(data);

  const throttledNewsApiCall = limiter.wrap(fetchFinancialNewsAPI);

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
      <Ticker>
        <FinancialTicker
          id="1"
          change={true}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="2"
          change={true}
          symbol="AAPL"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="3"
          change={true}
          symbol="GOOG"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="4"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="5"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="6"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="7"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="8"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="9"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="10"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
      </Ticker>
    </div>
  );
};

export default CryptoTicker;
