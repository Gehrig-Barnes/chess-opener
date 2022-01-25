import React from 'react';

import OpeningsCard from './OpeningsCard'


function OpeningsContainer({openings}) {

  
  return (
  <div className="openings-container-div">
    {openings.map((opening) => {
      return (
      <OpeningsCard 
      key={opening.id} 
      name={opening.name}
      difficulty={opening.difficulty}
      color={opening.color}
      image={opening.image}
      movies={opening.move}
      link={opening.link} 
      id={opening.id}
      />)
    })}
  </div>
  );
}

export default OpeningsContainer;  