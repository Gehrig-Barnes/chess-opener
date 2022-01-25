import '../App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import ChessPage from './ChessPage';

import OpeningDetails from "./OpeningDetails";
import SubmitOpening from './SubmitOpening';

import HistoricPlayerDetails from './HistoricPlayerDetails';
import SubmitPlayer from './SubmitPlayer';



function App() {
  const [openings, setOpenings] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/openings")
      .then((r) => r.json())
      .then((data) => setOpenings(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((r) => r.json())
      .then((data) => setPlayers(data))
  })

  function handleAddOpening(newOpening) {
    const newOpeningArray = [newOpening, ...openings];
    setOpenings(newOpeningArray)
  }

  function handleAddPlayer(newPlayer) {
    const newPlayerArray = [newPlayer, ...players];
    setPlayers(newPlayerArray)
  }


  return (
    <div className="App">
      <Nav />
      <Switch>

        {/* Openings */}
        <Route path="/openings/new" component={
          () => <SubmitOpening onAddOpening={handleAddOpening} />
        } />

        <Route path="/openings/:id" component={OpeningDetails} />

        <Route path="/openings" component={
          () => <ChessPage openings={openings} />
        } />

        {/* Players */}
        <Route path="/players/new" component={
          () => <SubmitPlayer onAddPlayer={handleAddPlayer} />
        } />

        <Route path="/players/:id" component={HistoricPlayerDetails} />

        <Route path="/players" component={
          () => <ChessPage players={players} />
        } />

      </Switch>


    </div>
  );
}

export default App;