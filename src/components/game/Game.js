import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadWords } from '../word/actions';
import { newGame, endGame } from './actions';
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

  componentWillReceiveProps(nextProps) {
    
    const { word, correct, guesses, player } = nextProps;
    const { scores } = this.props;
    
    const win = correct === word.length;
    const lose = (guesses.length - correct) === 6;
    if(scores) {
      console.log(scores[scores.length - 1]);
      console.log(nextProps.scores[nextProps.scores.length - 1]);
    }

    if(scores && scores[scores.length - 1] === nextProps.scores[nextProps.scores.length - 1]) return null;
    if(player === '' || !win && !lose) return null;
    else this.sendEndGame(player, correct, guesses);
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
    player: state.player,
    scores: state.scores
  }),
  ({ loadWords, newGame, endGame })
)(Game);