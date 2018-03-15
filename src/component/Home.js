import React, { Component } from 'react';
import AddPlayerForm from './AddPlayerForm';
import { connect } from 'react-redux';
import { addPlayer, loadPlayers } from './actions';
import PlayerList from './PlayerList';

class Home extends Component{

  componentDidMount() {
    this.props.loadPlayers();  
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };
  
  render(){
    const { addPlayer, players } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="player1">Select Player 1</label>
          <PlayerList id="player1" name="player1" players={players}/>
          
          <label htmlFor="player2">Select Player 2</label>
          <PlayerList id="player2" name="player2" players={players}/>

          <AddPlayerForm onSubmit={addPlayer}/>
          <button type="submit">Start Game</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    players: state.players.players }),
  { addPlayer, loadPlayers }
)(Home);