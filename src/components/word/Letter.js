import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCorrect } from './actions';

class Letter extends Component {

  state = {
    guessed: false
  };

  componentWillReceiveProps(nextProps) {
    const { letter, updateCorrect } = this.props;
    const mostRecentGuess = nextProps.guesses[nextProps.guesses.length - 1];
    if(mostRecentGuess === letter) this.setState({ guessed: true }, updateCorrect); //if the most recently guessed is the letter of this component, change its state to true and then update the correct count in store. This component needs to know as sometimes there are duplicate letters in a pokemon name
  }

  render() {
    const { letter } = this.props;
    const { guessed } = this.state;

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

