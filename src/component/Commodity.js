import React, { useState, useEffect } from "react";
import { DropdownList } from "react-widgets/cjs";
import Result from "./Result";

//============================================================================================================================================================================================

const commodityList = [
  "RICE",
  "WHEAT",
  "SUGAR",
  "CORN",
  "WTIOIL",
  "BRENTOIL",
  "SOYBEAN",
  "COFFEE",
  "XAU",
  "XAG",
  "XPD",
  "XPT",
  "XRH",
  "RUBBER",
  "ETHANOL",
  "CPO",
  "NG",
];

const Commodity = () => {
  const [commodity, setCommodity] = useState("");
  const [query, setQuery] = useState([]);
  const [type, setType] = useState([]);

  // CommodityAPI

  const commodityAPI = `https://www.commodities-api.com/api/latest?access_key=jhvo01w5j98zhcbi517u32j1mc14wgkh1zwzfp8rx4x3bdzujvnvx6gzody4&base=${query}&symbols=USD`;

  //CryptoAPI

  // const cryptoAPI = ``;

  //Need to consolidate API to decide which to call (if this then that)
  //Maybe using state, so if state change then select that one?

  //map the forex array to sort names

  // thinking maybe i can consolidate the api keywords under consolidatedAPI so that i can do an if, else

  const consolidatedAPI = ``;

  // console.log(commodityAPI);

  const makeApiCall = async () => {
    const res = await fetch(commodityAPI);
    const rawData = await res.json();

    // console.log(rawData);

    const rawDataArray = [rawData];

    // console.log(rawDataArray);

    const filteredData = rawDataArray.map((duck) => {
      return {
        price: duck.data.rates,
        unit: duck.data.unit,
      };
    });
    setType(filteredData);
  };
  // console.log(type);

  const handleSelectionChange = (event) => {
    setCommodity(event.target.value);
    // console.log(event);
  };

  return (
    <div>
      <h2>Select a commodity</h2>
      <DropdownList
        data={commodityList}
        // forex={forexList}
        onChange={(nextValue) => setQuery(nextValue)}
      />
      <button onClick={makeApiCall}>Submit</button>
      {/* <p>{query}</p> */}
      <Result type={type} />
    </div>
  );
};

export default Commodity;
