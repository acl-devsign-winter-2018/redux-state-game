import React, { Component } from 'react';
import './game.css';

export default class Square extends Component {
  render() {
    const { onClick, value, index } = this.props;
    return (
      <button className="square" onClick={() => onClick(index)}>
        <h2 className="letter">{value}</h2>
      </button>
    );
  }
}