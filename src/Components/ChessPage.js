import React from 'react';

import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningContainer from './SelectedOpeningContainer'
import SubmitOpenings from "./SubmitOpening"


function ChessPage({openings}) {
  return (
  <div>
    <OpeningsContainer openings={openings}/>
    <SelectedOpeningContainer />
  </div>
  );
}

export default ChessPage; 