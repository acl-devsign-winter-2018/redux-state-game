import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Game from '../game/Game';
import Player from '../player/Player';
import Leaderboard from '../leaderboard/Leaderboard';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Error from './Error';
import './app.css';

class App extends Component {

  render() {

    const { loading, error, player } = this.props;

    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1>Guess That Pokemon!</h1>
            <nav>
              <ul>
                <li><Link to="/">Play</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
              </ul>
            </nav>
            <div className="loader">
              <ClipLoader loading={loading}/>
            </div>
            { error && <Error error={error}/> }
          </header>
          <main id="main" role="main">
            {player ? <h2>Current Player: {player}</h2> : <Player/>}
            <Switch>
              <Route exact path="/" component={Game}/>
              <Route path="/leaderboard" component={Leaderboard}/>
              <Redirect to="/"/>       
            </Switch>
          </main>
          <footer id="footer" role="contentinfo">
            <small>&copy; 2018 Grace Provost &amp; Charly Welch | Student Work</small>
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error,
    player: state.player }),
  null
)(App);