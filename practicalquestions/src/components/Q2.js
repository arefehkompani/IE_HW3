import React,{useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import './Q2.css';
import Button from "./Button";

const Q2 = () => { 
    const [statuses, setStatuses] = useState({
        status: "start",
        counting: "up"
    })

    const [counter, setCounter] = useState(0)
    let myInterval = useRef(null)
    const start = () => {
        setStatuses({...statuses,status: "pause"})
            myInterval.current = setInterval(() => {
                setCounter(prevCount => prevCount + 1);  
            }, 1000)
    }

    const pause = () => {
        setStatuses({...statuses,status: "start"})
        clearInterval(myInterval.current);
    }

    const reset = () => {
        clearInterval(myInterval.current);
        setCounter(0);
        setStatuses({...statuses,status: "start"})
    }

    const upcounting = () => {

    }

    const downcounting = () => {

    }
    console.log(statuses);

    return(
        <div>
            <div>
                <p>Counter : {counter}</p>
                <Button name="Reset" onClick={reset} />
                {statuses.status=="start" ? (
                    <Button name="Start" onClick={start}/>
                ) : (
                    <Button name="Pause" onClick={pause}/>
                )}
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