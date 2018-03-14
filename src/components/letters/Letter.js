import React, { Component } from 'react';
import { connect } from 'react-redux';


class Letter extends Component {

  state = {
    selected: false
  };

  componentWillReceiveProps(nextProps) {
    const { letter } = this.props;
    if(nextProps.guesses.includes(letter)) this.setState({ selected: true });
  }

  render() {

    const { letter, onSelect } = this.props;
    const { selected } = this.state;

    return (
      <button className="letter" onClick={(event) => onSelect(event.target)} value={letter} disabled={selected ? true : false}>
        {letter}
      </button>

    );
  }
}

export default connect(
  state => ({ guesses: state.guesses }),
  null
)(Letter);
