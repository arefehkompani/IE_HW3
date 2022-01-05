import React from 'react';
import {Link} from 'react-router-dom';
import './Q4.css';
import Calculator from './calculator';


const Q4 = () => { 
    return(
        <div>
            <div>
                <Calculator />
            </div>
            <div>
                <Link
                className="App-link"
                to="/"
                >
                Back
                </Link>
            </div>
        </div>
    );
}

export default Q4;