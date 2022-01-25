import '../App.css';
import React, {useEffect, useState} from 'react';
import Nav from './Nav'
import ChessPage from './ChessPage'
import OpeningDetails from "./OpeningDetails"

import SubmitOpening from './SubmitOpening'
import {Route, Switch} from 'react-router-dom'

function App() {
  const [openings, setOpenings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/openings")
      .then((r) => r.json())
      .then((data)=> setOpenings(data));
  }, []);

  function handleAddOpening(newOpening){
    const newOpeningArray = [newOpening, ...openings];
    setOpenings(newOpeningArray)
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
          () => <ChessPage openings={openings}/>
        } />

    

        
        
      </Switch>
        
      
    </div>
  );
}

export default App;