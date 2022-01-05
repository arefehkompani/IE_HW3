import React from 'react';
import {Link} from 'react-router-dom';
import './Q3.css';
import UserList from './UserList'

const Q3 = () => { 
    return(
        <div>
            <div>
                <UserList />
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

export default Q3;