import React, { useState } from "react";
import commodityList from "./CommodityList";
import forexList from "./ForexList";
import { DropdownList } from "react-widgets/cjs";
import TokenList from "./TokenList";
import Crypto from "./Crypto";
import Forex from "./Forex";
import Commodity from "./Commodity";

const AggregateInput = () => {
  //   console.log(commodityList);

  //   console.log(forexList);

  const forexNameArray = [];
  const forexName = forexList.map((chicken) => {
    return forexNameArray.push(chicken.name);
  });
  //   console.log(forexNameArray);

  const [id, setId] = useState([]);
  const [aggregatedSearch, setAggregatedSearch] = useState("");
  //   console.log(id);

  const aggregatedArray = [];

  const mergeForex = forexNameArray.map((chicken) => {
    return aggregatedArray.push(chicken);
  });

  const mergeCrypto = id.map((chicken) => {
    return aggregatedArray.push(chicken);
  });

  const mergeCommodity = commodityList.map((chicken) => {
    return aggregatedArray.push(chicken);
  });

  //   console.log(aggregatedArray);

  //   const handleSearchFilter = (event) => {
  //     // setQuery(event);
  //     const searchWord = event;
  //     // console.log(searchWord);
  //     const newFilter = Object.keys(forexList).reduce((result, key) => {
  //       if (forexList[key].name.includes(searchWord)) {
  //         result = forexList[key].id;
  //       }
  //       return result;
  //     }, "");
  //     setFilterData(newFilter);

  const handleSearchAggregate = (event) => {
    const searchWord = event;
    setAggregatedSearch(searchWord);
  };
  //   console.log(aggregatedSearch);

  return (
    <div>
      <DropdownList data={aggregatedArray} onChange={handleSearchAggregate} />
      <button>Submit</button>
      <TokenList id={id} setId={setId} />
      <Crypto onClick={handleSearchFilter} />
      <Forex />
      <Commodity />
    </div>
  );
};

export default AggregateInput;
