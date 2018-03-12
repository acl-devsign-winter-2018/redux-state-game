import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';

export default class Square extends Component {
  render() {
    const { onClick, id, value } = this.props;
    return (
      <button className="square" onClick={onClick(id)}>
        {value}
      </button>
    );
  }
}