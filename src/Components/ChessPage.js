import React from 'react';

import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningContainer from './OpeningDetails'



function ChessPage({openings, handleRemoveCard}) {
  return (
  <div>
    <OpeningsContainer openings={openings} handleRemoveCard={handleRemoveCard}/>
    
  </div>
  );
}

export default ChessPage; 