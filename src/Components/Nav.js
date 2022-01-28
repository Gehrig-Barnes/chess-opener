import '../css/Nav.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom'


function Nav() {
  return (
    <header class="navBar">
      <div class="leftDiv">
        <Link class="link" to="/home">
          <h1>Chess Diary</h1>
        </Link>
      </div>
      <div class="rightDiv">
        <nav class="tabs">
          <Link class="opening" to="/openings">Show Openings </Link>
          <Link class="opening" to="/openings/new">  Add New</Link>
          <Link class="opening" to="/">Log out</Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;