import '../css/Nav.css'
import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function Nav() {
  return (
  <header class="links">
    <div class='diary'>
      <Link className="link" to="/">
        <h1>Chess Diary</h1>
      </Link>
    </div>
    <div>
    <nav class="tabs">
      <Link  class="opening" to="/openings" >Show Openings </Link>
      <Link class="opening"to="/openings/new">  Add New</Link>
    </nav>
    </div>
  </header>
  );
}

export default Nav;  