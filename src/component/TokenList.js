import React, { useEffect, useState } from "react";
import axios from "axios";
import TokenLis
import TokenListApiData from "./TokenListApiData";

const TokenList = () => {
  const [totalReactPackages, setTotalReactPackages] = useState(null);
  const [state, setState] = useState("");
  const [list, setList] = useState("");

  // const makeApiCall = async () => {
  //   const res = await fetch(coinlist);
  //   const rawData = await res.json();
  //   console.log(rawData);


  
  return <>
  <TokenListApiData name={name} id={id} symbol={symbol} /></>;
};

export default TokenList;
