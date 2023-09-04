import React from "react";

const CenterCard = ({ card }) => {
  return (
    <div className="center-card">
      <div className="center-card-image">
        <img src={card.imageUrl} alt={card.name} />
      </div>
      <div className="center-card-details">
        <h3>{card.name}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default CenterCard;
