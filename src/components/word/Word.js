import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';

class Word extends Component {


  render() {
    const { word } = this.props;

    return (
      <ul className="word-container">
        {word && word.split('').map((letter, index) => <Letter key={index} letter={letter}/>)}
      </ul>
    );
  }
}
export default connect(
  state => ({ word: state.word }),
  null
)(Word);