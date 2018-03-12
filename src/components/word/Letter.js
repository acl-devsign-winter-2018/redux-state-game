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
    if(mostRecentGuess === letter) this.setState({ guessed: true }, updateCorrect);
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

