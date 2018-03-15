import React, { Component } from 'react';
import { connect } from 'react-redux';


class Letter extends Component {

  render() {

    const { letter, onSelect, guesses } = this.props;
    const selected = guesses.includes(letter);

    return (
      <button className="letter" onClick={(event) => onSelect(event.target)} value={letter} disabled={selected}>
        {letter}
      </button>

    );
  }
}

export default connect(
  state => ({ guesses: state.guesses }),
  null
)(Letter);
