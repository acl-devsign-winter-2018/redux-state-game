import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCorrect } from './actions';

class Letter extends Component {

  componentWillReceiveProps(nextProps) {
    const { letter, updateCorrect } = this.props;
    const mostRecentGuess = nextProps.guesses[nextProps.guesses.length - 1];
    if(mostRecentGuess === letter) updateCorrect(); //if the most recently guessed is the letter of this component, update the correct count in store. This component needs to know as sometimes there are duplicate letters in a pokemon name
  }

  render() {
    const { letter, guesses } = this.props;
    const guessed = guesses.includes(letter);

    return (
      <li className="game-letters">
        { guessed ? <p>{letter}</p> : '_' }
      </li>
    );
  }
}

export default connect(
  state => ({ guesses: state.guesses }),
  { updateCorrect }
)(Letter);

