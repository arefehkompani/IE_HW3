import React,{useState} from 'react';
import Keypad from './../keypad/keypad';
import Screen from '../screen/screen';
import s from './calculator.module.css';

const parse = (str) => {
  str = str.replace("÷",'/')
  str = str.replace("x",'*')
  return Function(`'use strict'; return (${str})`)()
}

export default function Calculator() {
  // TODO: Implement calculator logic here
  const [pad, setPad] = useState(null);
  const [result, setResult] = useState(null);
  const sendPad = (key) => {
    // console.log(key);
    setPad(key);

    if(key== "="){
      setResult(parse(result));
    }else if(key== "C"){
      setResult(null)
    }else{
      setResult((prev) => {
        if(prev != null){
          return prev + key
        }
        return key
      });
    }
  }

  
  
  return (
    <div className={s.calculator}>
      <Screen result={result}/>
      <Keypad sendPad={sendPad}/>
    </div>
  );
}
