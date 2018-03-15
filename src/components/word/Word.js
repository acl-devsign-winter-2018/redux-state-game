import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';
import './word.css';

class Word extends Component {

  render() {
    const { word } = this.props;

    return (
      <ul className="word-container">
        {word.split('').map((letter, index) => <Letter key={index} letter={letter}/>)}
      </ul>
    );
  }
}
export default connect(
  state => ({ word: state.word, correct: state.correct }),
  null
)(Word);