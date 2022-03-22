import React from "react";

const Result = (props) => {
  console.log(`this is ${JSON.stringify(props)} from Result.js`);
  const mappedData = props.type.map((element, index) => {
    return (
      <>
        <div key={index}>
          USD: {element.price.USD}
          <br />
          Unit: {element.unit}
        </div>
      </>
    );
  });
  return <div>{mappedData}</div>;
};

export default Result;
