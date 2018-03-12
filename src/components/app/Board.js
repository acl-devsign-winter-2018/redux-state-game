import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
// import Square from '../square/Square';
import { takeTurns } from './Actions';

function Square(props) {
  return (
    <button id={props.id} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(id) {
    const squares = this.state.squares.slice();
    squares[id] = this.state.xIsNext ? <span className="x">X</span> : <span className="o">O</span>;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(id) {
    return <Square 
      value={this.state.squares[id]} 
      onClick={() => this.handleClick(id)}
    />;
  }

  render() {

    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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

export default connect (
  null
)(Board);