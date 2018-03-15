import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GameBoard from './Gameboard';
import Home from './Home';
import Stats from './Stats';
import { newGame } from './actions';
import './App.css';

class App extends Component{
  render(){
    const { newGame } = this.props;
    return (
      <div>
        <Router>
          <div>
            <header id='header'> 
              <h1>Connect 3</h1>
              <button onClick={newGame}> New Game </button>
            </header>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/game' component={GameBoard} />
              <Route path='/stats' component={Stats} />
              <Redirect to='/'/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  state => ({
    activePlayer: state.game.activePlayer,
    winner: state.game.winner }), 
  { newGame }
)(App);