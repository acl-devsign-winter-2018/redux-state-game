import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from '../app/actions';

class Replay extends Component {

  render() {

    const { outcome } = this.props;

    return (
      <div className="replay-box">
        <p>You {outcome}! Would you like to play again?</p>
        <button onClick={newGame}>Restart!</button>
      </div>

    );
  }

}

export default connect(
  state => ({ outcome: state.outcome }), 
  ({ newGame })
)(Replay);