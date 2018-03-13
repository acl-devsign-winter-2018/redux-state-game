import React, { PureComponent } from 'react';
import { winnerWinnerChickenDinner } from './actions';
import Board from './Board';
import '../../index.css';

export default class Game extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(winnerWinnerChickenDinner(squares) || squares[i]) {
      return;
    }
    squares[i] =  this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = winnerWinnerChickenDinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Start New Game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner) {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <section className="game">
        <header>
          <h1> J&J Tic Tac Toe</h1>
        </header>
        <div className="game-board">
          <Board squares={current.squares}
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol className="number">{moves}</ol>
        </div>
        <footer>
          <small>(c) Jacob & Jenny</small>
        </footer>
      </section>
    );
  }
}