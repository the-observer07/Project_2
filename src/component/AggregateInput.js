import React from "react";
import commodityList from "./CommodityList";
import TokenList from "./Tokenlist";
import forexList from "./ForexList";

const AggregateInput = () => {
  console.log(commodityList);
  console.log(TokenList);
  console.log(forexList);

  return (
    <div>
      <DropdownList data={namesArray} onChange={handleSearchFilter} />
    </div>
  );
};

export default AggregateInput;
