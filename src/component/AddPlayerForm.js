import React, { Component } from 'react';
import store from '../store';

export default class AddPlayerForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };



  render(){
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Add new player:
          <input required value={name}  name='name' onChange={this.handleChange}/>
          </label>
          <button type='submit' >ADD</button> 
        </form>
      </div>
    );
  }
}