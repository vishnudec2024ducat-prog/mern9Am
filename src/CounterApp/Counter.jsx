import React, { useState } from "react";

const Counter = () => {
    let [count,setCount] =   useState(0)
     
  // let count = 0;
  // const handleIncreemnet = () => {
  //       count = count +1 
  //       setCount(100)
  // };
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-6 mx-auto border">
          
          <h1>Counter App</h1>
          <h1>Count: {count}</h1>
          <div>
            <button
              // onClick={()=>handleIncreemnet("hiii")}
              // onClick={handleIncreemnet}
              onClick={() =>count<10? setCount(++count):setCount(count)}
              className="btn btn-success"
            >
              Inc
            </button>

            <button
              className="mx-2 btn btn-danger"
              onClick={() =>count>0? setCount(--count): setCount(count)}
            >
              dec
            </button>
            <button
              className="mx-2 btn btn-warning"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
