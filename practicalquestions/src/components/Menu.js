import React from 'react';
import logo from './../logo.svg';

const Menu = () => { 
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Arefeh Kompani Saeid - 9731054
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Question 2
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Question 3
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Question 4
        </a>
      </header>
    );
}

export default Menu;