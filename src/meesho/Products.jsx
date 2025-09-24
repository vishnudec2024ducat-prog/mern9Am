import React from "react";

const Products = ({
  elm: { title, description, thumbnail, category, price, rating },
}) => {
  return (
    <div className="col-md-6 text-center">
      <div
        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative d-flex align-items-center"
        style={{ height: "30vh" }}
      >
        <div className="col-8 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            {title}
          </strong>
          <h3 className="mb-0">{category}</h3>
          <h3 className="mb-0">$ {price}</h3>
          <div className="mb-1 text-body-secondary">Rating: {rating}</div>
          <p className="card-text mb-auto">{description}</p>
        </div>
        <div className="col-4 d-none d-lg-block d-flex align-items-center">
          <img src={thumbnail} alt="" height={"100px"} />
        </div>
      </div>
    </div>
  );
};

export default Products;
