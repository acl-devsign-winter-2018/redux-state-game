import React, { Component } from 'react';
import { connect } from 'react-redux';
import './game.css';
import { takeTurns, loadGame, winner } from './actions';


class Histories extends Component {

  componentDidMount() {
    this.props.loadGame();
  }

  render() {
    const { winResults, winner } = this.props;
  
    return (
      <div className="history">
        <h3>Player's History</h3>
        <p>{winResults}</p>
      </div>
    );
  }
}


export default connect (
  ({ game }) => ({ 
    winResults: game.winResults,
    winner: game.winner
  }),
  { takeTurns, loadGame }
)(Histories);