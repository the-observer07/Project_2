import React, { useState, useEffect } from "react";
import { DropdownList } from "react-widgets/cjs";

const cryptoList = [];

const Crypto = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [token, setToken] = useState("");
  const [otherToken, setOtherToken] = useState("");

  // ForexAPI

  const apiQuery = `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=${otherToken}`;
  const apiTicker = ``;

  const makeApiCall = async () => {
    //   const res = await fetch(forexAPI);
    //   const rawData = await res.json();
    //   // console.log(rawData);
    //   const rawDataArray = [rawData];
    //   // console.log(rawDataArray);
    //   const sortForex = forexList.map((chicken) => {
    //     return {
    //       CountryName: chicken.name,
    //     };
    //   });
    //   setForexType(sortForex);
    //   const filteredData = rawDataArray.map((duck) => {
    //     return {
    //       price: duck.data.rates,
    //       unit: duck.data.unit,
    //     };
    //   });
    //   setType(filteredData);
  };
  // console.log(type);

  return (
    <div>
      <br />
      <h2>Select a token</h2>
      <DropdownList
        // data={cryptoToken}
        // forex={forexList}
        onChange={(nextValue) => setQuery(nextValue)}
      />
      <button onClick={makeApiCall}>Submit</button>
      {/* <Result type={type} /> */}
    </div>
  );
};

export default Crypto;
