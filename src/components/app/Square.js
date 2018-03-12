import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';

export default class Square extends Component {
  render() {
    const { onClick, value, index } = this.props;
    return (
      <button className="square" onClick={() => onClick(index)}>
        <h1>{value}</h1>
      </button>
    );
  }
}