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
<<<<<<< HEAD
  const [players, setPlayers] = useState([]);
=======
  const [removeRequest, setRemoveRequest] = useState(false)
>>>>>>> 054f2841a48971796f050f4b6068a0b7e3e9ba27

  useEffect(() => {
    fetch("http://localhost:3000/openings")
      .then((r) => r.json())
<<<<<<< HEAD
      .then((data) => setOpenings(data));
  }, []);
=======
      .then((data)=> setOpenings(data));
  }, [removeRequest]);
>>>>>>> 054f2841a48971796f050f4b6068a0b7e3e9ba27

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((r) => r.json())
      .then((data) => setPlayers(data))
  })

  function handleAddOpening(newOpening) {
    const newOpeningArray = [newOpening, ...openings];
    setOpenings(newOpeningArray)
  }

<<<<<<< HEAD
  function handleAddPlayer(newPlayer) {
    const newPlayerArray = [newPlayer, ...players];
    setPlayers(newPlayerArray)
  }
=======
  function handleRemoveCard(card){
    fetch(`http://localhost:3000/openings/${card.id}`, {
      method: "Delete",
      headers: {
        'Content-Type': 'application/json'
      }
    }) .then(setRemoveRequest(!removeRequest))
  }
  
>>>>>>> 054f2841a48971796f050f4b6068a0b7e3e9ba27


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
<<<<<<< HEAD
          () => <ChessPage openings={openings} />
        } />

        {/* Players */}
        <Route path="/players/new" component={
          () => <SubmitPlayer onAddPlayer={handleAddPlayer} />
=======
          () => <ChessPage openings={openings} handleRemoveCard={handleRemoveCard}/>
>>>>>>> 054f2841a48971796f050f4b6068a0b7e3e9ba27
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