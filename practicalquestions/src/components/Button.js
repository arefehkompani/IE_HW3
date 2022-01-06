import React from 'react';
import {Link} from 'react-router-dom';
import css from './Q2.module.css';


const Button = (props) => { 
    return(
        <button className={css.buttonsQ2} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default Button;