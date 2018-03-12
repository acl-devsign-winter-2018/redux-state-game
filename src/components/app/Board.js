import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import Square from './Square';
import { takeTurn } from './Actions';



class Board extends Component {

  handleClick(i) {
    this.props.takeTurn(i);
  }

  // handleReset() {
  //   this.props.onReset();
  // }

  renderSquare(i) {
    return (<Square 
      value={this.props.squares[i]} 
      index={i}
      onClick={(y) => this.handleClick(y)}
    />);
  }

  render() {

    const winner = (this.props.winner !== 'no winner')
      ? <section><span>{this.props.winner} is the winner</span>
        <button className="button" onClick={() => handleReset()}>RESET</button></section>
      : null;


    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    winner: state.game.winner,
    xWins: state.game.xWins,
    oWins: state.game.oWins,
    activePlayer: state.game.activePlayer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    takeTurn(i) {
      dispatch(takeTurn(i));
    },
    // onReset() {
    //   dispatch(resetGame());
    // }
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(Board);