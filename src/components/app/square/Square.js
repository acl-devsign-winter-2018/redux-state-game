import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Square extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  render() {

    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.props.value}
      </button>
    );
  }
}

export default connect (
  null
)(Square);