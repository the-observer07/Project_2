import React, { useState, useEffect } from "react";
// import { DropdownList } from "react-widgets/cjs";
import Dropdown from "react-bootstrap/Dropdown";

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
commodityList.sort();

const Input = () => {
  const [commodity, setCommodity] = useState("");

  const commodityAPI = `https://www.commodities-api.com/api/latest?access_key=jhvo01w5j98zhcbi517u32j1mc14wgkh1zwzfp8rx4x3bdzujvnvx6gzody4& base = USD & symbols = ${commodityList}`;

  const makeApiCall = async () => {
    const res = await fetch(commodityAPI);
    const rawData = await res.json();
    console.log(rawData);
  };

  //   const handleSelectionChange = (event) => {
  //     setCommodity(event.target.value);
  //   };

  return (
    <div>
      <DropdownList
        data={commodityList}
        onChange={(nextCommodity) => setCommodity(nextCommodity)}
        onClick={makeApiCall}
      />
    </div>
  );
};

export default Input;
