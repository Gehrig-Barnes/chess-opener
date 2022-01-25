import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function Nav() {
  return (
  <header>
    <h1>
      Chess Diary
    </h1>
    
    <nav>
      <Link to="/openings" >Show Openings </Link>
      <Link to="/openings/new">  Add New</Link>
    </nav>
  </header>
  );
}

export default Nav;  