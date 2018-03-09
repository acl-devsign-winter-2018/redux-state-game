import React, { Component } from 'react';

export default class Letter extends Component {

  render() {

    const { letter, onSelect } = this.props;

    return (
      <button className="letter" onClick={(event) => onSelect(event.target)} value={letter}>
        {letter}
      </button>
    );
  }
}
