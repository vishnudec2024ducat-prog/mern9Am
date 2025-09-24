import React from 'react'

const FootText = ({ elm: { num, footText } }) => {
  return (
    <div className="col-4">
      <h4>{num}</h4>
      <h6>{footText}</h6>
    </div>
  );
};

export default FootText