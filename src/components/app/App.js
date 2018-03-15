import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Game from '../game/Game';
import Leaderboard from '../leaderboard/Leaderboard';
import { connect } from 'react-redux';
import Error from './Error';
import './app.css';
import { listenForUser, logout } from '../auth/actions';
import PrivateRoute from './PrivateRoute';
import { Signin, Signup } from '../auth/User';

class App extends Component {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() {

    const { error, user, logout } = this.props;

    return (
      <Router>
        <div id="container">
          <header id="header">
            <h1>Guess That Pokemon!</h1>
            <nav>
              <ul>
                <li><Link to="/game">Play</Link></li>
                <li><Link to="/leaderboard">Scores</Link></li>
              </ul>
            </nav>
            <ul className="user-links">
              {
                user
                  ? <li><Link to="/game" onClick={logout}>Log out</Link></li>
                  : 
                  <Fragment>
                    <li><Link to="/auth/signin">Sign In</Link></li>
                    <li><Link to="/auth/signup">Sign Up</Link></li>
                  </Fragment>
              }
            </ul>
            {error && <Error error={error}/> }
          </header>
          <main id="main" role="main">
            {user ? <pre>{JSON.stringify(user.email, true, 2)}</pre> : 'no user'}
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
  ({ listenForUser, logout })
)(App);