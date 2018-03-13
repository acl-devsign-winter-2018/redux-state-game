import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';

class Register extends Component {

  state = {
    playerX: '',
    playerO: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state,
      history: this.props.history
    })
      .then(() => {
        this.setState({
          playerX: '',
          playerO: ''
        });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { playerX, playerO } = this.state;

    return (
      <div className="register">
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="playerX">
            <input id="playerX" name="playerX" value={playerX} onChange={this.handleChange}/>
          </label>
          <label htmlFor="playerO">
            <input id="playerO" name="playerO" value={playerO} onChange={this.handleChange}/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect (
  (state) => ({ history: state.history.id })
)(Register);