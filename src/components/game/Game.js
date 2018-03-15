import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadWords } from '../word/actions';
import { newGame } from './actions';
import { ClipLoader } from 'react-spinners';
import './game.css';
import Letters from '../letters/Letters';
import Player from '../player/Player';
import Word from '../word/Word';
import Image from '../image/Image';
import Replay from '../replay/Replay';


class Game extends Component {

  componentDidMount() {
    this.props.loadWords();
    this.props.newGame();
  }

  render() {

    const { word, player, loading, gameResult } = this.props;
    const gameEnd = gameResult !== null;

    return (
      <Fragment>
        {player ? <h2 className="player-name">Current Player: {player}</h2> : <Player/>}
        {player && 
          <div className="game">
            <div className="loader">
              <ClipLoader loading={loading}/>
            </div>
            {(gameResult === 'win') && <Replay outcome={'win'}/>}
            {(gameResult === 'lose') && <Replay outcome={'lose'}/>}
            {word !== '' && 
            <Fragment>
              <Image gameEnd={gameEnd}/>
              {gameResult === null &&
                <Fragment>
                  <Word/>
                  <Letters/>
                </Fragment>
              }
            </Fragment>
            }
          </div>
        }
      </Fragment>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    correct: state.correct, 
    word: state.word,
    player: state.player,
    scores: state.scores,
    incorrect: state.incorrect,
    gameResult: state.gameResult
  }),
  ({ loadWords, newGame })
)(Game);