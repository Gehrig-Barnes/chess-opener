import '../css/OpeningsCard.css'
import React from 'react';
import { Link } from "react-router-dom"

function OpeningsCard({ name, image, id, handleRemoveCard, opening }) {

  return (
    <div className="opening-card">
      <div className="nameDiv">
        <h3>{name}</h3>
      </div>
      <div className="imgDiv">
        <img
          src={image}
          className="openingImage"
          alt={name} /> {/* Providing alt attribute with meaningful text */}
      </div>
      <div className="bottomButtons">
        <p>
          <Link
            to={`openings/${id}`}
            id="seeMore">
            See more
          </Link>
        </p>
        <button
          id="removeButton"
          onClick={() => handleRemoveCard(opening)}>remove</button>
      </div>
    </div>
  );
}

export default OpeningsCard;
