import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadWords } from '../word/actions';
import { newGame } from './actions';
import { ClipLoader } from 'react-spinners';
import Error from './Error';
import './app.css';
import Letters from '../letters/Letters';
import Word from '../word/Word';
import Image from '../image/Image';
import Replay from '../replay/Replay';


class App extends Component {

  componentDidMount() {
    this.props.loadWords();
    this.props.newGame();
  }

  render() {

    const { word, loading, error, correct, guesses } = this.props;

    const win = correct === word.length;
    const lose = (guesses.length - correct) === 6;

    return (
      <div id="container">
        <header id="header">
          <h1></h1>
          <div className="loader">
            <ClipLoader loading={loading}/>
            { (win && word !== '') && <Replay outcome={'win'}/>}
            { lose && <Replay outcome={'lose'}/>}
          </div>
          { error && <Error error={error}/> }
        </header>
        <main id="main" role="main">
          { word !== '' && 
            <Fragment>
              <Image/>
              <Word gameEnd={win || lose}/>
              <Letters gameEnd={win || lose}/>
            </Fragment>
          }
        </main>
        <footer id="footer" role="contentinfo">
          <small>&copy; 2018 Grace Provost &amp; Charly Welch | Student Work</small>
        </footer>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    correct: state.correct, 
    guesses: state.guesses,
    word: state.word, 
    loading: state.loading,
    error: state.error }),
  ({ loadWords, newGame })
)(App);