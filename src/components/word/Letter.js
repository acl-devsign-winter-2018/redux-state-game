import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Letter extends Component {

  state = {
    guessed: false
  };

  render() {
    const { letter } = this.props;
    const { guessed } = this.state;

    return (
      <li className="game-letters">
        { guessed ? { letter } : '_' }
      </li>
    );
  }
}

