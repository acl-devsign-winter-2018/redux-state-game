import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Letter from './Letter';


export default class Letters extends Component {

  state = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  };

  handleSelect = {

  };

  render() {
    const { alphabet } = this.state;
    console.log(alphabet);
    return (
      <div className="letters-container">
        {alphabet.map(letter => <Letter key={letter} letter={letter} onSelect={this.handleSelect}/>)}
      </div>
    );
  }
}
