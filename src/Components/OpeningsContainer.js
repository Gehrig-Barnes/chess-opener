import '../css/OpeningsContainer.css'
import React from 'react';
import OpeningsCard from './OpeningsCard'


function OpeningsContainer({openings, handleRemoveCard}) {

  
  return (
  <div className="openings-container-div">
    {openings.map((opening) => {
      return (
      <OpeningsCard
      opening={opening} 
      key={opening.id} 
      name={opening.name}
      difficulty={opening.difficulty}
      color={opening.color}
      image={opening.image}
      movies={opening.move}
      link={opening.link} 
      id={opening.id}
      handleRemoveCard={handleRemoveCard}
      />)
    })}
  </div>
  );
}

export default OpeningsContainer; 