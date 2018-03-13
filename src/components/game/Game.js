import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadWords } from '../word/actions';
import { newGame } from './actions';
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

  sendEndGame = (player, correct, guesses) => {
    const score = (correct * 10) - (guesses.length);
    this.props.endGame(player, score);
  };

  render() {

    const { word, correct, guesses, player } = this.props;
    if(!player) return null;
    const win = correct === word.length;
    const lose = (guesses.length - correct) === 6;

    if(win || lose) this.sendEndGame(player, correct, guesses);


    return (
      <div className="game">

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
    correct: state.correct, 
    guesses: state.guesses,
    word: state.word,
    player: state.player 
  }),
  ({ loadWords, newGame })
)(Game);