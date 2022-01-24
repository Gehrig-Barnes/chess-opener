import React from 'react';

import HistoricPlayersContainer from './HistoricPlayersContainer'
import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningContainer from './SelectedOpeningContainer'


function ChessPage({}) {
  return (
  <div>
    <HistoricPlayersContainer />
    <OpeningsContainer />
    <SelectedOpeningContainer />
  </div>
  );
}

export default ChessPage; 