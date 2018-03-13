import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {

  handleSubmit = event => {
    event.preventDefault();
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
  null
)(Player); 