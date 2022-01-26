import '../css/ChessPage.css'
import React from 'react';
import OpeningsContainer from './OpeningsContainer'


function ChessPage({ openings, handleRemoveCard }) {
  return (
    <div>
      <OpeningsContainer openings={openings} handleRemoveCard={handleRemoveCard} />
    </div>
  );
}

export default ChessPage;