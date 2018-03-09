import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';

export default class Word extends Component {

  state = {
    word: ['c', 'a', 't']
  };

  render() {
    const { word } = this.state;

    return (
      <ul className="word-container">
        {word.map((letter, index) => <Letter key={index} letter={letter}/>)}
      </ul>
    );
  }
}
