import React, { Component } from 'react';
import './square.css';

export default class Square extends Component{
  render(){
    const { id, onClick, value, state } = this.props;
    return (
      <div id={id} onClick={() => onClick(id)}>
        <div 
          className = {state[value] ? state[value].color : ''}>
        </div>
        {value}
      </div>
        
    );
  }
}