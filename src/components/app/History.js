import React, { Component } from 'react';
import './Game.css';

export default class History extends Component {

  render() {
    const { text } = this.props;
  
    return (
      <div className="history">
        <li className="history-li">
          {text}
        </li>
      </div>
    );
  }
}