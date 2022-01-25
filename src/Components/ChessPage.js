import React from 'react';

import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningContainer from './OpeningDetails'

import HistoricPlayersContainer from './HistoricPlayersContainer'


<<<<<<< HEAD

function ChessPage({ openings, players }) {
  return (
    <div>
      <OpeningsContainer openings={openings} />
      <HistoricPlayersContainer players={players} />
    </div>
=======
function ChessPage({openings, handleRemoveCard}) {
  return (
  <div>
    <OpeningsContainer openings={openings} handleRemoveCard={handleRemoveCard}/>
    
  </div>
>>>>>>> 054f2841a48971796f050f4b6068a0b7e3e9ba27
  );
}

export default ChessPage;   