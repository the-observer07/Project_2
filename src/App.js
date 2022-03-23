import React from "react";
// import SearchBar from "./component/SearchBar";
import Commodity from "./component/Commodity";
import Forex from "./component/Forex";
import Crypto from "./component/Crypto";
import CryptoTicker from "./component/CryptoTicker";
import TokenList from "./component/TokenList";
// import TokenList from "./component/TokenList";
// import TokenListApiData from "./component/TokenListApiData";

const App = () => {
  return (
    <div>
      <CryptoTicker />
      <br />
      <br />
      <h1>Aggregator</h1>
      <Commodity />
      <Forex />
      <Crypto />
      {/* <TokenListApiData /> */}
      <TokenList />
    </div>
  );
};

export default App;
