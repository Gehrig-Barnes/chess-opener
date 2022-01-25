import React from 'react';

import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningContainer from './OpeningDetails'



function ChessPage({openings}) {
  return (
  <div>
    <OpeningsContainer openings={openings}/>
    
  </div>
  );
}

export default ChessPage; 