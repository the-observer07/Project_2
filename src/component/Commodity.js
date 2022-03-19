import React, { useState, useEffect } from "react";
import { DropdownList } from "react-widgets/cjs";
import Result from "./Result";

const Input = () => {
  const [commodity, setCommodity] = useState("");
  const [value, setValue] = useState([]);
  const [type, setType] = useState([]);

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

  const commodityAPI = `https://www.commodities-api.com/api/latest?access_key=jhvo01w5j98zhcbi517u32j1mc14wgkh1zwzfp8rx4x3bdzujvnvx6gzody4&base=${value}&symbols=USD`;

  console.log(commodityAPI);

  const makeApiCall = async () => {
    const res = await fetch(commodityAPI);
    const rawData = await res.json();

    console.log(rawData);

    const rawDataArray = [rawData];

    console.log(rawDataArray);

    const filteredData = rawDataArray.map((type) => {
      return {
        price: type.data.rates,
        unit: type.data.unit,
      };
    });
    setType(filteredData);
  };
  console.log(type);

  const handleSelectionChange = (event) => {
    setCommodity(event.target.value);
    // console.log(event);
  };

  return (
    <div>
      <h2>Select an input</h2>
      <DropdownList
        data={commodityList}
        // forex={forexList}
        onChange={(nextValue) => setValue(nextValue)}
      />
      <button onClick={makeApiCall}>Submit</button>
      {/* <p>{value}</p> */}
      <Result type={type} />
    </div>
  );
};

export default Input;
