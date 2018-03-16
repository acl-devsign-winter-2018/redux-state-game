import React, { PureComponent } from 'react';
import Board from './Board';
import '../../index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../index.css';

class Game extends PureComponent {
  
  render() {
    
    return (
      <section className="game">
        <header>
          <h1> J&J Tic Tac Toe</h1>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Game">Game</Link></li>
            <li><Link to="/Leaderboard">Leaderboard</Link></li>
          </ul>
        </header>
        <div className="container">
          <div className="game-board">
            <Board/>
          </div>
        </div>
        {/* <div className="leader">
          <GameHistory/>
        </div> */}
        <footer>
          <small>(c) Jacob & Jenny</small>
        </footer>
      </section>
    );
  }
}


export default connect (
  null
)(Game);