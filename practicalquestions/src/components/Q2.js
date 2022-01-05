import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Q2.css';
import Button from "./Button";

const Q2 = () => { 
    const [counter, setCounter] = useState(0)

    const start = () => {

    }

    const pause = () => {

    }

    const reset = () => {

    }

    const upcounting = () => {

    }

    const downcounting = () => {

    }
    console.log(counter);

    return(
        <div>
            <div>
                <p>Counter : 0</p>
                <Button name="Reset"/>
                <Button name="Start" onClick={() => console.log("click start")}/>
                <Button name="Up Counting"/>
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

export default Q2;