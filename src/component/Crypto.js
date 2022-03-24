import React, { useState, useEffect } from "react";
// import { DropdownList } from "react-widgets/cjs";
// import tokenList from "./TokenListApiData";
import TokenList from "./TokenList";
import tokenList from "./TokenListApiData";
import { Button, Container, Row, Col } from "react-bootstrap";
// import AggregateInput from "./AggregateInput";

const Crypto = (props) => {
  // console.log(tokenList);

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

  // const displayName = tokenList.map((chicken) => {
  //   return namesArray.push(chicken.name);
  // });

  useEffect(() => {
    getResults();
  }, [props.cryptoState]);

  const getResults = () => {
    const searchWord = props.searchWord;
    // console.log(searchWord);
    const newFilter = Object.keys(tokenList).reduce((result, key) => {
      if (tokenList[key].name.match(searchWord)) {
        result = tokenList[key].id;
        // console.log(tokenList[key].id);
      }
      // props.setCryptoState(false);
      return result;
    }, "");
    setFilterData(newFilter);
  };
  console.log(filterData);
  console.log(cryptoAPIQuery);
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
      <br />
      <Button onClick={makeApiCall} size="lg">
        Submit
      </Button>
      <br />
      <br />
      <br />
      <div className="data">Token price : ${extractedData}</div>
      <br />
      {/* <Result type={type} /> */}
    </div>
  );
};

export default Crypto;
