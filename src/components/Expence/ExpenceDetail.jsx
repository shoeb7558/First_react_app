import React from 'react';

function ExpenceDetail(props) {
  return (
    <div className="expence-detail">
      <ul>
        {props.details.map((item, index) => (
          <li key={index}>{item.detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenceDetail;