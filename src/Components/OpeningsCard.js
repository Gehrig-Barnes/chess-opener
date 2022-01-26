import '../css/OpeningsCard.css'
import React, {useState} from 'react';
import {Link} from "react-router-dom"

function OpeningsCard({name, difficulty, color, image, moves, link, id, handleRemoveCard, opening}) {
  const [remove, setRemove] = useState(false);

  function handleRemove(){
    setRemove((remove) => !remove)
  }

  

  return (
  <div class="opening-card">
    <h3>{name}</h3>
          <p>
          <Link to={`openings/${id}`}>See more</Link>
          </p>
          <img width="150" height="150" src={image}/>
    <button onClick={() => handleRemoveCard(opening)}>remove</button>
    
  </div>
  );
} 

export default OpeningsCard; 