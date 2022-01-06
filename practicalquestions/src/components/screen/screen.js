import React from 'react';
import s from './screen.module.css';
import PropTypes from 'prop-types';

export default function Screen({ result }) {
  // TODO: Show the clicked button or result here.
  return <div className={s.screen}>{result?result:0}</div>;
}

Screen.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Screen.defaultProps = {
  result: 0,
};
