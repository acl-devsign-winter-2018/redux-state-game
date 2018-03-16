import React, { Component } from 'react';
import { connect } from 'react-redux';
import './game.css';
import { addPlayers } from './actions';

export class Register extends Component {

  constructor(props){
    super(props);

    this.state = {
      playerX: '',
      playerO: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlayers({
      ...this.state
    });
    
      
    this.setState({
      playerX: '',
      playerO: ''
       
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
   
  };

  render() {
    const { playerX, playerO } = this.state;

    return (
      <div>
        <div className="register">

          <form onSubmit={this.handleSubmit}> 
            <label htmlFor="playerX"> Player X Name:
            <input id="playerX" name="playerX" value={playerX} onChange={this.handleChange}/>
            </label>
            <label htmlFor="playerO"> Player O Name:
            <input id="playerO" name="playerO" value={playerO} onChange={this.handleChange}/>
            </label>
            <button type="submit" value="Submit"
            >Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  ({ addPlayers })
)(Register);