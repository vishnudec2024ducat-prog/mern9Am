import React from 'react'
import FootText from './FootText'

const Third = ({ foot, cardColor }) => {
  return (
    <div className={`container bg-${cardColor} py-1`}>
      <div className="row">
        {foot.map((elm,ind) => (
          <FootText elm={elm} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Third