import React from "react";

function CardFront({ card, display }) {
  const { number, month, year, name } = card;

  return (
    <div className="card card-front">
      <div className="circle"></div>
      <div>
        <p className="card-number">
          {display
            ? number.replace(/(\d{4})(?=\d)/g, "$1 ")
            : "0000 0000 0000 0000"}
        </p>
        <div className="card-info">
          <p className="card-name">{display ? name : "Jane Appleseed"}</p>
          <p className="card-date">{display ? `${month}/${year}` : "00/00"}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
