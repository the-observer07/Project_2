import React, { useState, useEffect, Component } from "react";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
// import icon from "./news-icon.png";
// import Ticker from "react-ticker";
import Bottleneck from "bottleneck";
// import bootstrap from "bootstrap";

import { type } from "@testing-library/user-event/dist/type";

const DataTicker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [type, setType] = useState("");
  const [newsTitle, setNewsTitle] = useState([]);

  const cryptoApiTicker =
    "https://api.coingecko.com/api/v3/exchanges/binance/tickers";
  const financialNewsTicker =
    "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT,APPL&filter_entities=true&language=en&api_token=HtQPxNVoj5bYyudPypD08TDxD7MdNbMkUB69DXJe";

  // const limiter = new Bottleneck({
  //   maxConcurrent: 1,
  //   minTime: 5000, // pick a value that makes sense for your use case
  // });

  // const result = await limiter.schedule(() => fetchCryptoAPI());

  //   const result = await limiter.schedule(() => makeApiCall());

  useEffect(() => {
    fetchCryptoAPI();
    fetchFinancialNewsAPI();

    //   throttledApiCall();
    //   throttledNewsApiCall();
    //   // filterData();
  }, []);

  const fetchCryptoAPI = async () => {
    const res = await fetch(cryptoApiTicker);
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
    setType(filteredData);
    console.log(filteredData);
  };

  const fetchFinancialNewsAPI = async () => {
    const res = await fetch(financialNewsTicker);
    const rawData = await res.json();
    console.log(rawData.data);
    const extractTitle = rawData.data.map((duck) => {
      return {
        title: duck.title,
        url: duck.url,
        imgurl: duck.image_url,
      };
    });
    setNewsTitle(extractTitle);
  };
  console.log(newsTitle);

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

  return <div></div>;
};

export default DataTicker;
