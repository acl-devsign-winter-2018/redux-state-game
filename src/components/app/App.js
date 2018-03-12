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


class App extends Component {

  componentDidMount() {
    this.props.loadWords();
    this.props.newGame();
  }

  render() {

    const { word, loading, error } = this.props;

    return (
      <div id="container">
        <header id="header">
          <h1></h1>
          <div className="loader">
            <ClipLoader loading={loading}/>
          </div>
          { error && <Error error={error}/> }
        </header>
        <main id="main" role="main">
          { word !== '' && 
            <Fragment>
              <Image/>
              <Word/>
              <Letters/>
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
    word: state.word, 
    loading: state.loading,
    error: state.error }),
  ({ loadWords, newGame })
)(App);