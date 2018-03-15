import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayer } from './actions';
import './player.css';

class Player extends Component {

  handleSubmit = event => {
    event.preventDefault();
    this.props.setPlayer(event.target.elements.name.value);
  };

  render() {
    return (
      <form className="player-form" onSubmit={this.handleSubmit}>
        <legend className="clip">Enter Your Name</legend>
        <label htmlFor="name"> Player Name:
        <input name="name"/>
        </label>
        <button>Add</button>
      </form>
    );
  }
}

export default connect(
  null,
  ({ setPlayer })
)(Player); 