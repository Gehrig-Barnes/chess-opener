import React from 'react';

function OpeningsCard({name, difficulty, color, image, moves, link}) {
  return (
  <div>
    <img width="150" height="150" src={image}/>
    <h3>{name}</h3>
  </div>
  );
}

export default OpeningsCard;