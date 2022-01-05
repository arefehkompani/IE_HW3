import React from 'react';
import {Link} from 'react-router-dom';
import './Q2.css';


const Button = (props) => { 
    return(
        <button className="buttonsQ2" onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default Button;