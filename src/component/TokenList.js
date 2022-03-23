import React, { useEffect, useState } from "react";
// import axios from "axios";
// import TokenListApiData from "./TokenListApiData";
import Bottleneck from "bottleneck";

const TokenList = (props) => {
  // const [totalReactPackages, setTotalReactPackages] = useState(null);
  // const [state, setState] = useState("");
  // const [list, setList] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);

  const tickerData = "https://api.coingecko.com/api/v3/exchanges/binance";

  const limiter = new Bottleneck({
    reservoir: 100, // initial value
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 500,

    // also use maxConcurrent and/or minTime for safety
    maxConcurrent: 1,
    minTime: 333, // pick a value that makes sense for your use case
  });

  const makeApiCall = async () => {
    const res = await fetch(tickerData);
    const rawData = await res.json();
    // console.log(rawData);
    // console.log(rawData.tickers);
    setData(rawData.tickers);
    // const rawDataArray = rawData.tickers;
    // const filterData = () => {
    const filteredData = rawData.tickers.map((duck) => {
      return {
        id: duck.base,
        price: duck.last,
      };
    });

    setType(filteredData);
    // };
    const emptyArray = [];
    const getId = filteredData.map((chicken) => {
      return emptyArray.push(chicken.id);
    });
    // console.log(emptyArray);
    props.setId(emptyArray);
  };
  // console.log(data);
  // console.log(type);
  // console.log(props.id);

  const throttledApiCall = limiter.wrap(makeApiCall);

  useEffect(() => {
    throttledApiCall();
    makeApiCall();
    // filterData();
  }, []);

  const cryptoIdArray = [];
  const displayId = type.map((chicken) => {
    return cryptoIdArray.push(chicken.id);
  });
  // console.log(displayId);
  // console.log(cryptoIdArray);

  // props.setId(cryptoIdArray);
  // console.log(props.id);

  return <div></div>;
};

export default TokenList;
