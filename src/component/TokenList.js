import React, { useEffect, useState } from "react";
// import axios from "axios";
// import TokenListApiData from "./TokenListApiData";
import Bottleneck from "bottleneck";

const TokenList = () => {
  const [totalReactPackages, setTotalReactPackages] = useState(null);
  const [state, setState] = useState("");
  const [list, setList] = useState("");
  const [data, setData] = useState("");

  const tickerData = "https://api.coingecko.com/api/v3/exchanges/binance";

  const limiter = new Bottleneck({
    reservoir: 100, // initial value
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 1000,

    // also use maxConcurrent and/or minTime for safety
    maxConcurrent: 1,
    minTime: 333, // pick a value that makes sense for your use case
  });

  useEffect(() => {
    throttledApiCall();
  }, []);

  const makeApiCall = async () => {
    const res = await fetch(tickerData);
    const rawData = await res.json();
    console.log(rawData.tickers);
    setData(rawData);
  };
  // console.log(data);

  const throttledApiCall = limiter.wrap(makeApiCall);

  return <div></div>;
};

export default TokenList;
