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
  const [flag, setFlag] = useState(false)

  const sendPad = (key) => {
    setPad(key);
    console.log(flag);
    if(flag){
      setFlag(false)
      setResult(null)
    }

    if(key== "="){
      setFlag(true)
      console.log("in eq"+flag);
      setResult(parse(result));
    }else if(key== "C"){
      setResult(null)
    }else if(key== "+/-"){

      let a = /[^d*$x%÷]\d*$/.exec(result.toString());
      let b = result.toString().replace(/[^d*$x%÷]\d*$/,"")

      if(a==null){
        a = /\d*$/.exec(result.toString())
        b = null
      }

      a = a[0]*(-1)
      if(a>0){ a = "+"+a}

      setResult((prev) => {
        if(prev != null){
          return b==null ? a : b+a
        }
        return key
      });

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
