import React from 'react';

import HistoricPlayerCard from './HistoricPlayerCard'
import SubmitHistoricPlayer from './SubmitHistoricPlayer'

function HistoricPlayersContainer() {
  return (
  <div class="historic-players-container-div">
    <HistoricPlayerCard />
    <SubmitHistoricPlayer />
  </div>
  );
}

export default HistoricPlayersContainer;  