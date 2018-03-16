import React, { PureComponent } from 'react';
import '../../index.css';

export default class Square extends PureComponent {
  render() {
    const { onClick, value, id } = this.props;
    return (
      <button className="square" onClick={() => onClick(id)}>
        <h2>{value}</h2>
      </button>
    );
  }
}