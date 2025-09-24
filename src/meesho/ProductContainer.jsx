import React, { useState } from "react";
import Products from "./Products";
import { data } from "./productsList.js";
import NotFound from "./NotFound.jsx";
const ProductContainer = () => {
  const [inp, setInp] = useState("");
  const [productData,setProductData] = useState(data)
 
  const handleSearch = () => {
       let afterFilterProductList = data.filter((elm) =>
         elm.title.toLowerCase().includes(inp.toLowerCase())
       );
          setProductData(afterFilterProductList)
  };

  return (
    <div className="container">
      <div className="py-2">
        <input
          type="text"
          className=""
          onChange={(e) => setInp(e.target.value)}
        />
        <button className="btn btn-success mx-3" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="row">
        {productData.length == 0 ? (
          <NotFound/>
        ) : (
          productData.map((elm, ind) => <Products key={ind} elm={elm} />)
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
