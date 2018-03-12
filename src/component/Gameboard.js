import React, { Component } from 'react';
import { connect } from 'react-redux';
import './gameboard.css';
import { playerChoice } from './actions';
import Square from './Square';

class Gameboard extends Component{

  handleClick = target => {
    if(this.props.turns < 9){
      console.log(target);
      const { playerChoice } = this.props;
      playerChoice(target);
    }
  }

  render(){

    const { game, winner } = this.props;

    return (
      <div>
        {winner ? <div>{winner}</div> : null}
        <section id="gameboard">
       
          {game.gameBoard.map((s, i) => <Square value={s} state={game} key={i} id={i} onClick={this.handleClick}/>)}
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    game: state.game,
    turns: state.game.turns,
    winner: state.game.winner }),
  { playerChoice } 
)(Gameboard);