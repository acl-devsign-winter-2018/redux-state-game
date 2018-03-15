import React, { Component } from 'react';

export default class PlayerList extends Component {
  
  render() {
    const { players } = this.props;
    return (
      <select>
        {players && players.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
      </select>
    );
  }
}
