import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Square from './square';
import '../../index.css';
import { takeTurns, reset, endMatch } from './actions';

class Board extends PureComponent {

  handleClick(id) {
    this.props.takeTurns(id);
  }

  handleReset() {
    this.props.reset();
  }
  
  handleMatchEnd() {
    this.props.endMatch();
  }

  renderSquare(id) {
    return (
      <Square value={this.props.squares[id]}
        index={id}
        onClick={() => this.handleClick(id)}/>
    );
  }

  render() {
    
    const xWins = (this.props.xWins);
    const oWins = (this.props.oWins);
    const tie = (this.props.tie);
    const winResult = (this.props.winner !== '')
      ? <section><span className="winner">{this.props.winner} is the winner!</span></section>
      : null;
    const tieResult = (tie)
      ? <section className="tie">A TIE!</section>
      : null;
    return (
      <section>
        <div className="status">{winResult}{tieResult}</div>
        <div><p>X wins: {xWins}</p><p>O wins: {oWins}</p></div>
        <div className="game">
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
          <button className="button" onClick={() => this.handleReset()}>RESET</button>
          <button className="button" onClick={() => this.handleMatchEnd()}>SAVE MATCH</button>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    winner: state.game.winner,
    xWins: state.game.xWins,
    oWins: state.game.oWins,
    activePlayer: state.game.activePlayer,
    tie: state.game.tie
  };
}
function mapDispatchToProps(dispatch) {
  return {
    takeTurns(id) {
      dispatch(takeTurns(id));
    },
    reset() {
      dispatch(reset());
    },
    endMatch() {
      dispatch(endMatch());
    }
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Board);