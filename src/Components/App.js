import '../App.css';
import React, {useEffect, useState} from 'react';
 

import Nav from './Nav'
import ChessPage from './ChessPage'
import Footer from './Footer'

function App() {
  const [openings, setOpenings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/openings")
      .then((r) => r.json())
      .then(setOpenings);
  }, []);

  return (
    <div className="App">
      <Nav />
      <ChessPage openings={openings}/>
      <Footer />
    </div>
  );
}

export default App;