import React, { useState, useEffect } from "react";
import { DropdownList } from "react-widgets/cjs";
import tokenList from "./TokenListApiData";
import AggregateInput from "./AggregateInput";

const Crypto = (props) => {
  // console.log(props.aggregatedSearch);

  // console.log(props.token);
  // const [query, setQuery] = useState("");
  // const [type, setType] = useState("");
  // const [query, setQuery] = useState("");
  // const [otherQuery, setOtherQuery] = useState("");
  // const [name, setName] = useState("");
  // const tokenName = tokenList[i].name;
  const [filterData, setFilterData] = useState("");
  const [tokenPrice, setTokenPrice] = useState([]);
  const [extractedData, setExtractedData] = useState("");

  const cryptoAPIQuery = `https://api.coingecko.com/api/v3/simple/price?ids=${filterData}&vs_currencies=USD`;

  const namesArray = [];
  // const idArray = [];
  // const symbolArray = [];
  // console.log(namesArray);

  const displayName = tokenList.map((chicken) => {
    return namesArray.push(chicken.name);
  });

  const handleSearchFilter = (event) => {
    // setQuery(event);
    const searchWord = event;
    // console.log(searchWord);
    const newFilter = Object.keys(tokenList).reduce((result, key) => {
      if (tokenList[key].name.includes(searchWord)) {
        result = tokenList[key].id;
        // console.log(tokenList[key].id);
      }
      return result;
    }, "");
    setFilterData(newFilter);
  };

  // setName = displayName;
  // console.log(name);

  // useEffect(() => {
  // displayName();
  // }, []);
  // const cryptoList = [{props.token}];

  const makeApiCall = async () => {
    const res = await fetch(cryptoAPIQuery);
    const rawData = await res.json();
    // console.log(rawData);
    //   const rawDataArray = [rawData];
    //   // console.log(rawDataArray);
    // const sortToken = tokenList.map((chicken) => {
    //   return {
    //     tokenPrice: chicken.usd,
    //   };
    // });
    setTokenPrice(rawData);
    console.log(rawData);

    const tokenPriceArray = [rawData];
    const obj1 = tokenPriceArray[0];
    console.log(obj1);

    const obj2 = obj1[Object.keys(obj1)[0]];
    console.log(obj2);

    const value = obj2[Object.keys(obj2)[0]];
    console.log(value);
    setExtractedData(value);
  };

  // console.log(tokenPrice);

  // setExtractedData = value;
  //   const filteredData = rawDataArray.map((duck) => {
  //     return {
  //       price: duck.data.rates,
  //       unit: duck.data.unit,
  //     };
  //   });
  //   setType(filteredData);

  // console.log(tokenPrice);

  // const tokenPriceArray = [tokenPrice];
  // const obj1 = tokenPriceArray[0];

  // const obj2 = obj1[Object.keys(obj1)[0]];
  // console.log(obj2);

  // const value = obj2[Object.keys(obj2)[0]];
  // console.log(tokenPriceArray);

  return (
    <div>
      {/* <br />
      <h2>Select a token</h2>
      <DropdownList data={namesArray} onChange={handleSearchFilter} />
      <button onClick={makeApiCall}>Submit</button>
      {/* <Result type={type} /> */}
      {/* <div>Token price : ${extractedData}</div> */}
    </div>
  );
};

export default Crypto;
