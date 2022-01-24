import '../App.css';
import React from 'react';

import Nav from './Nav'
import ChessPage from './ChessPage'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <ChessPage />
      <Footer />
    </div>
  );
}

export default App;