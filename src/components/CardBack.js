import React from "react";

function CardBack({ cvc, display }) {
  return (
    <div className="card card-back">
      <div className="black-strip"></div>
      <div className="card-cvc">
        <p>{display ? cvc : "000"}</p>
      </div>
    </div>
  );
}

export default CardBack;
