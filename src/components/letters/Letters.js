import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';
import { guessLetter, updateIncorrect } from './actions';
import { endGame } from '../game/actions';


class Letters extends Component {

  state = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  };

  handleSelect = (guess) => {
    const { guessLetter, word, updateIncorrect } = this.props;
    const letter = guess.value;
    if(!word.includes(letter)) updateIncorrect(); 
    guessLetter(letter);
  };
  
  componentDidUpdate() {
    const { incorrect, endGame, correct, word } = this.props;
    if(incorrect === 6) endGame('lose');
    if(correct === word.length) endGame('win');
  }

  render() {
    const { alphabet } = this.state;
    const { gameEnd } = this.props;

    return (
      <div className="letters-container">
        { !gameEnd && alphabet.map(letter => <Letter key={letter} letter={letter} onSelect={this.handleSelect}/>)}
      </div>
    );
  }
}

export default connect(
  state => ({ word: state.word, incorrect: state.incorrect, correct: state.correct }),
  { guessLetter, updateIncorrect, endGame }
)(Letters);
