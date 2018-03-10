import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWords, newGame } from '../word/actions';
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
    
    return (
      <div id="container">
        <header id="header">
          <h1></h1>
        </header>
        <main id="main" role="main">
          <Image/>
          <Word/>
          <Letters/>
        </main>
        <footer id="footer" role="contentinfo">
          <small>&copy; 2018 Grace Provost &amp; Charly Welch | Student Work</small>
        </footer>
      </div>
    );
  }
}

export default connect(
  null,
  ({ loadWords, newGame })
)(App);