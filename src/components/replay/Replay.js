import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame, endGame } from '../game/actions';
import './replay.css';

class Replay extends Component {

  render() {

    const { outcome, newGame, word } = this.props;

    return (
      <div className="replay-box">
        <h2>Your Pokemon was {word}!</h2>
        <p>You {outcome}! Would you like to play again?</p>
        <button onClick={newGame}>Restart!</button>
      </div>

    );
  }

}

export default connect(
  state => ({ 
    word: state.word,
    player: state.player,
    guesses: state.guesses,
    correct: state.correct
  }),
  ({ newGame, endGame })
)(Replay);
