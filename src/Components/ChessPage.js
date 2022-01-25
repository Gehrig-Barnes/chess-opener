import React from 'react';

import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningContainer from './OpeningDetails'

import HistoricPlayersContainer from './HistoricPlayersContainer'



function ChessPage({ openings, players }) {
  return (
    <div>
      <OpeningsContainer openings={openings} />
      <HistoricPlayersContainer players={players} />
    </div>
  );
}

export default ChessPage;   