import React from 'react';

import OpeningsCard from './OpeningsCard'
import SubmitOpening from './SubmitOpening'

function OpeningsContainer({openings}) {

  console.log(openings)
  return (
  <div class="openings-container-div">
    {openings.map((opening) => {
      return (
        <OpeningsCard
          key={opening.id} name={opening.name} difficulty={opening.difficulty} color={opening.color} image={opening.image} moves={opening.moves} link={opening.link}
        />
        )
    })}
  </div>
  );
}

export default OpeningsContainer; 