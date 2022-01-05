import React from 'react';
import Keypad from './../keypad/keypad';
import Screen from '../screen/screen';
import s from './calculator.module.css';

export default function Calculator() {
  // TODO: Implement calculator logic here
  return (
    <div className={s.calculator}>
      <Screen />
      <Keypad />
    </div>
  );
}
