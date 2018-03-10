import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Square extends Component {

  render() {

    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default connect (
  null
)(Square);