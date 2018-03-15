import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listenForUser } from '../auth/actions';
import { Signin, Signup } from '../auth/User';
import Game from '../game/Game';
import Leaderboard from '../leaderboard/Leaderboard';
import Header from './header/Header';
import PrivateRoute from './PrivateRoute';
import './app.css';

class App extends Component {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() {
    return (
      <Router>
        <div id="container">
          <Header/>
          <main id="main" role="main">
            <Switch>
              <PrivateRoute exact path="/game" component={Game}/>
              <Route exact path="/leaderboard" component={Leaderboard}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Route exact path="/auth/signup" component={Signup}/>
              <Redirect to="/signin"/>       
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
  state => ({ error: state.error, user: state.user }),
  ({ listenForUser })
)(App);