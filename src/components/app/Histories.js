import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import { takeTurns, loadGame } from './Actions';


class Histories extends Component {

  componentDidMount() {
    this.props.loadGame();
  }

  render() {
    const { winResults } = this.props;
  
    return (
      <div className="history">
        <h3>Player's History</h3>
        <p>{winResults}</p>
      </div>
    );
  }
}


export default connect (
  ({ game }) => ({ winResults: game.winResults }),
  { takeTurns, loadGame }
)(Histories);