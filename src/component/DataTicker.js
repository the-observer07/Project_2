import React, { useState, useEffect, Component } from "react";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
import icon from "./news-icon.png";
// import Ticker from "react-ticker";
import Bottleneck from "bottleneck";
// import bootstrap from "bootstrap";

import { type } from "@testing-library/user-event/dist/type";

const DataTicker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [type, setType] = useState("");
  const [newsTitle, setNewsTitle] = useState([]);

  const cryptoApiTicker = "https://api.coingecko.com/api/v3/exchanges/binance";
  const financialNewsTicker =
    "https://api.marketaux.com/v1/news/all?symbols=TSLA,GME,AMC&filter_entities=true&language=en&api_token=tCXxnvvlVvQUAkFItjmYeycDW7eQEEbw1KhLCZI1";

  // meta="11:10:20"]
  // const limiter = new Bottleneck({
  //   maxConcurrent: 1,
  //   minTime: 5000, // pick a value that makes sense for your use case
  // });

  // const result = await limiter.schedule(() => fetchCryptoAPI());

  //   const result = await limiter.schedule(() => makeApiCall());

  useEffect(() => {
    fetchFinancialNewsAPI();
    fetchCryptoAPI();
    setInterval(() => {
      fetchCryptoAPI();
    }, 10000);
  }, []);

  const fetchCryptoAPI = async () => {
    const res = await fetch(cryptoApiTicker);
    const rawData = await res.json();
    let sevenData = rawData.tickers;
    const firstSeven = sevenData.filter((element, index) => index < 9);
    const filteredData = firstSeven.map((element, index) => {
      return (
        <FinancialTicker
          id={index}
          change={true}
          symbol={element.base}
          lastPrice={element.converted_last.usd}
          currentPrice={element.last}
        />
      );
    });
    setCryptoData(filteredData);
  };
  // console.log(cryptoData);

  const fetchFinancialNewsAPI = async () => {
    const res = await fetch(financialNewsTicker);
    const rawData = await res.json();
    // console.log(rawData.data);
    const financialMappedData = rawData.data.map((element, index) => {
      return (
        <NewsTicker
          id={index}
          icon={element.image_url}
          title={element.title}
          url={element.url}
        />
      );
    });
    setNewsData(financialMappedData);
  };

  return (
    <div>
      <Ticker className="tickerItemFinancial">{cryptoData}</Ticker>
      <div className="newsticker">
        <Ticker isNewsTicker={true}>{newsData}</Ticker>
      </div>
    </div>
  );
};

export default DataTicker;
