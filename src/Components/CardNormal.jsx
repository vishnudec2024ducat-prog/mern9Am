import React from "react";

export const CardNormal = ({name,imgAdd,email}) => {
    // let name = "Ravi"
    // console.log(props)
    // const {name}  = props
  return (
    <>
      <div className="col-4">
        <div className="card text-center">
          <img src={imgAdd} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name: {name} </h5>
            <h5 className="card-title">Email: {email} </h5>
            <p className="card-text">des</p>
          </div>
        </div>
      </div>
    </>
  );
};
