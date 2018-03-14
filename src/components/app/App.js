import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Game from '../game/Game';
import Leaderboard from '../leaderboard/Leaderboard';
import { connect } from 'react-redux';
import Error from './Error';
import './app.css';

class App extends Component {

  render() {

    const { error } = this.props;

    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1>Guess That Pokemon!</h1>
            <nav>
              <ul>
                <li><Link to="/">Play</Link></li>
                <li><Link to="/leaderboard">Scores</Link></li>
              </ul>
            </nav>
            {error && <Error error={error}/> }
          </header>
          <main id="main" role="main">
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
  state => ({ error: state.error }),
  null
)(App);