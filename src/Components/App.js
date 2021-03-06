import '../App.css';
import React, { useEffect, useState } from 'react';
import Nav from './Nav'
import ChessPage from './ChessPage'
import OpeningDetails from "./OpeningDetails"
import Footer from './Footer';

import SubmitOpening from './SubmitOpening'
import { Route, Switch } from 'react-router-dom'

import Home from "./Home"

import LoginForm from "./LoginForm"


function App() {
  const [players, setPlayers] = useState([]);
  const [openings, setOpenings] = useState([]);
  const [removeRequest, setRemoveRequest] = useState(false);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));

  }, []);




  useEffect(() => {
    fetch("http://localhost:3000/openings")
      .then((r) => r.json())
      .then((data) => setOpenings(data));
  }, [removeRequest]);

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((r) => r.json())
      .then((data) => setPlayers(data));
  }, []);


  function handleAddOpening(newOpening) {
    const newOpeningArray = [newOpening, ...openings];
    setOpenings(newOpeningArray)
  }

  function handleRemoveCard(card) {
    fetch(`http://localhost:3000/openings/${card.id}`, {
      method: "Delete",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(setRemoveRequest(!removeRequest))
  }



  return (
    <div className="App" src="src/Images/chess_board.jpeg">

      <Switch>
        <Route path="/openings/new" component={
          () => {
            return (<>
              <Nav />
              <SubmitOpening onAddOpening={handleAddOpening} />
            </>)
          }

        } />

        <Route path="/openings/:id" component={OpeningDetails} />

        <Route path="/openings" component={
          () => {
            return (
              <>
                <Nav />
                <ChessPage openings={openings} handleRemoveCard={handleRemoveCard} />
              </>
            )
          }
        } />

        <Route path="/home" component={
          () => {
            return (
              <>
                <Nav />
                <Home players={players} />
              </>
            )
          }
        } />

        <Route path="/" component={
          () => <LoginForm users={users} />
        } />



        //how do you persist that login through interaction and state?
      //once you refresh the page that login is gone. 
      //local storage?

      //taking what user wrote on form. 
      //fetch in parent component. use a .find for userState
      ///once we refresh, state is cleared out.
      //when you login, setcurrent user id to local storage locastorage.setID
      //basic patern. When you login, you set to local storage. 
      //when logout, localstorage = '' 
      </Switch>

      <Footer />
    </div>
  );
}

export default App;