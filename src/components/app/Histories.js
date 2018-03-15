import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import History from './History';

class Histories extends Component {

  render() {
    const { histories } = this.props;
  
    return (
      <div className="history">
        <h3>Player's History</h3>
        <ul className="history-ul">
          {histories.map(history => <History key={history.id} {...history} />)}
        </ul>
      </div>
    );
  }
}

export default connect (
  state => ({ histories: state.histories }),
)(Histories);