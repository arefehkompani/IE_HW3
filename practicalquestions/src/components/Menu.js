import React from 'react';
import logo from './../logo.svg';
import {Link} from 'react-router-dom';


const Menu = () => { 
    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Arefeh Kompani Saeid - 9731054
            </p>
            <Link
            className="App-link"
            to="/Q2"
            rel="noopener noreferrer"
            >
            Question 2
            </Link>
            <Link
            className="App-link"
            to="/Q3"
            rel="noopener noreferrer"
            >
            Question 3
            </Link>
            <Link
            className="App-link"
            to="/Q4"
            rel="noopener noreferrer"
            >
            Question 4
            </Link>
        </div>
    );
}

export default Menu;