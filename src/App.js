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
    <>
      <Ticker className="tickerItemFinancial">
        <FinancialTicker
          id="1"
          change={true}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="2"
          change={true}
          symbol="AAPL"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="3"
          change={true}
          symbol="GOOG"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="4"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="5"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="6"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="7"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="8"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="9"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
        <FinancialTicker
          id="10"
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
      </Ticker>
      <br />
      <br />

      <br />
      <Container>
        <AggregateInput />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="newsticker">
        <Ticker isNewsTicker={true}>
          <NewsTicker
            id="0"
            // icon={icon}
            title=""
            url=""
            meta="11:10:20"
          />
          <NewsTicker
            id="1"
            // icon={icon}
            title="Blue passports to be issued to Brits for the first time in decades next month"
            url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
            meta="11:10:20"
          />
          <NewsTicker
            id="2"
            // icon={icon}
            title="Blue passports to be issued to Brits for the first time in decades next month"
            url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"
            meta="11:10:20"
          />
        </Ticker>
      </div>
    </>
  );
};

export default App;
