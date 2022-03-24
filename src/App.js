import React from "react";
// import SearchBar from "./component/SearchBar";
// import Commodity from "./component/Commodity";
// import Forex from "./component/Forex";
// import Crypto from "./component/Crypto";
import DataTicker from "./component/DataTicker";
// import TokenList from "./component/TokenList";
// import TokenList from "./component/TokenList";
// import TokenListApiData from "./component/TokenListApiData";
import AggregateInput from "./component/AggregateInput";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
import { Button, Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <DataTicker />
      <br />
      <br />
      <div className="container">
        <AggregateInput />
      </div>
    </div>
  );
};

export default App;
