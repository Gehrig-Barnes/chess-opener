import React from 'react';

import Nav from './Nav'
import HistoricPlayersContainer from './HistoricPlayersContainer'
import OpeningsContainer from './OpeningsContainer'
import SelectedOpeningsContainer from './SelectedOpeningsContainer'
import Footer from './Footer'


export default function ChessPage() {
  return <div>
    <Nav />
    <HistoricPlayersContainer />
    <OpeningsContainer />
    <SelectedOpeningsContainer />
    <Footer />
  </div>;
}
