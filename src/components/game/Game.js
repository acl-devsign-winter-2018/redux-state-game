import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadWords } from '../word/actions';
import { newGame } from './actions';
import { ClipLoader } from 'react-spinners';
import './game.css';
import Letters from '../letters/Letters';
import Word from '../word/Word';
import Image from '../image/Image';
import Replay from '../replay/Replay';


class Game extends Component {

  componentDidMount() {
    this.props.loadWords();
    this.props.newGame();
  }

  render() {

    const { word, correct, guesses, player, loading } = this.props;
    if(!player) return null;
    const win = correct === word.length;
    const lose = (guesses.length - correct) === 6;

    return (
      <div className="game">
        <div className="loader">
          <ClipLoader loading={loading}/>
        </div>
        {(win && word !== '') && <Replay outcome={'win'}/>}
        {lose && <Replay outcome={'lose'}/>}
        {word !== '' && 
        <Fragment>
          <Image gameEnd={win || lose}/>
          <Word gameEnd={win || lose}/>
          <Letters gameEnd={win || lose}/>
        </Fragment>
        }
      
      </div>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    correct: state.correct, 
    guesses: state.guesses,
    word: state.word,
    player: state.player,
    scores: state.scores
  }),
  ({ loadWords, newGame })
)(Game);