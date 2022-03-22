import React from "react";
// import SearchBar from "./component/SearchBar";
import Commodity from "./component/Commodity";
import Forex from "./component/Forex";
import Crypto from "./component/Crypto";
import CryptoTicker from "./component/CryptoTicker";

const App = () => {
  return (
    <div>
      <CryptoTicker />
      <h1>Aggregator</h1>
      <Commodity />
      <Forex />
      <Crypto />
    </div>
  );
};

export default App;
