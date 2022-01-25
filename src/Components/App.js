import '../App.css';
import React, {useEffect, useState} from 'react';
import Nav from './Nav'
import ChessPage from './ChessPage'
import OpeningDetails from "./OpeningDetails"

import SubmitOpening from './SubmitOpening'
import {Route, Switch} from 'react-router-dom'

function App() {
  const [openings, setOpenings] = useState([]);
  const [removeRequest, setRemoveRequest] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/openings")
      .then((r) => r.json())
      .then((data)=> setOpenings(data));
  }, [removeRequest]);

  function handleAddOpening(newOpening){
    const newOpeningArray = [newOpening, ...openings];
    setOpenings(newOpeningArray)
  }

  function handleRemoveCard(card){
    fetch(`http://localhost:3000/openings/${card.id}`, {
      method: "Delete",
      headers: {
        'Content-Type': 'application/json'
      }
    }) .then(setRemoveRequest(!removeRequest))
  }
  


  return (
    <div className="App">
       <Nav />
       <Switch>

        <Route path="/openings/new" component={
          () => <SubmitOpening  onAddOpening={handleAddOpening}/> 
        } />

        <Route path="/openings/:id" component={OpeningDetails}/>

        <Route path="/openings" component={
          () => <ChessPage openings={openings} handleRemoveCard={handleRemoveCard}/>
        } />

    

        
        
      </Switch>
        
      
    </div>
  );
}

export default App;