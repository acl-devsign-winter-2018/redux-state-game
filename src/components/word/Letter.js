import React, { Component } from 'react';
import { connect } from 'react-redux';

class Letter extends Component {

  state = {
    guessed: false
  };

  componentWillReceiveProps(nextProps) {
    const { letter } = this.props;
    if(nextProps.guesses.includes(letter)) this.setState({ guessed: true });
  }

  render() {
    const { letter } = this.props;
    const { guessed } = this.state;

    return (
      <li className="game-letters">
        { guessed ? <p>{letter}</p> : '_' }
      </li>
    );
  }
}

export default connect(
  state => ({ guesses: state.guesses }),
  null
)(Letter);

