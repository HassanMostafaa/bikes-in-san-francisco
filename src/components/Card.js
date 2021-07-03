import React, { useState } from "react";
import FilteredCard from "./FilteredCard";

const Card = ({ card, cards }) => {
  const [showRenters, setshowRenters] = useState(false);
  const filtered = cards.filter((cardz) => cardz.brand !== card.brand);

  return (
    <div className="card">
      <div className="imgWTxt">
        <img src={card.img} alt="img" width="350px" />
        <div className={!showRenters ? "text" : "text opened"}>
          <div className="brand">{card.brand}</div>
          <h3 className="name">{card.name}</h3>
          <div className="splitter">
            <div className="address">
              <p className="location">
                <i className="far fa-circle"></i>
                &nbsp;&nbsp;{card.location}
              </p>
              <p className="shop">
                <i className="fas fa-warehouse"></i>
                &nbsp;{card.shop}
                <strong>&nbsp;{card.shopLocation}</strong>
              </p>
            </div>
            <div className="price">
              <h3>
                {card.Price}
                <span
                  style={{
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  / {card.PricePer}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className={!showRenters ? "opener" : "opener opened"}>
        <div className="openerBtn">
          <button className="icon" onClick={() => setshowRenters(!showRenters)}>
            {!showRenters ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </button>
          {cards.length - 1}
          &nbsp; Other Renters
          <span
            style={{
              color: "rgb(187, 72, 72)",
            }}
          >
            {" "}
            from $120 / day
          </span>
        </div>

        <div
          className={
            showRenters ? "active otherRentersList " : "otherRentersList"
          }
        >
          {filtered.map((fCard, ix) => (
            <FilteredCard key={ix} card={fCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
