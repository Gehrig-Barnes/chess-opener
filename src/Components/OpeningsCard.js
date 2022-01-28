import '../css/OpeningsCard.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom"

function OpeningsCard({ name, difficulty, color, image, moves, link, id, handleRemoveCard, opening }) {
  const [remove, setRemove] = useState(false);

  function handleRemove() {
    setRemove((remove) => !remove)
  }



  return (
    <div class="opening-card">
      <div class="nameDiv">
        <h3>{name}</h3>
      </div>
      <div class="imgDiv">
        <img
          src={image}
          class="openingImage" />
      </div>
      <div class="bottomButtons">
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