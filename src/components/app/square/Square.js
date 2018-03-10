import React from 'react';
// import { connect } from 'react-redux';
import '../App.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}