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
        <img width="150" height="150" src={image} />
      </div>
      <div class="bottomButtons">
        <p>
          <Link to={`openings/${id}`}>See more</Link>
        </p>
        <button onClick={() => handleRemoveCard(opening)}>remove</button>
      </div>
    </div>
  );
}

export default OpeningsCard;  