import React, { Component } from 'react';
import Game from '../game/Game';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Error from './Error';
import './app.css';

class App extends Component {

  render() {

    const { loading, error } = this.props;

    return (
      <div id="container">
        <header id="header">
          <h1>Guess That Pokemon!</h1>
          <div className="loader">
            <ClipLoader loading={loading}/>
          </div>
          { error && <Error error={error}/> }
        </header>
        <main id="main" role="main">
          <Game/>        
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
    loading: state.loading,
    error: state.error }),
  null
)(App);