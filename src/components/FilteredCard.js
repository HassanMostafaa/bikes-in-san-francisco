import React from "react";

const FilteredCard = ({ card }) => {
  return (
    <div className="filteredCard">
      <div className="imgNTxt">
        <div className="img">
          <img src={card.img} width="80px" alt="fImg" />
        </div>
        <div className="filteredTxt">
          <div className="splitter">
            <div className="brand">
              <i className="fas fa-user-alt"></i> {card.brand}
            </div>
          </div>
          <div className="location">
            <i className="far fa-circle"></i> {card.location}
          </div>
          <div className="price">{card.Price}</div>
        </div>
      </div>
      <div className="rate">
        {card.rate} <i className="fas fa-star"></i>
      </div>
    </div>
  );
};

export default FilteredCard;
