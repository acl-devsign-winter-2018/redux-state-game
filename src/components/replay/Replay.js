import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from '../app/actions';

class Replay extends Component {

  render() {

    const { outcome, newGame } = this.props;

    return (
      <div className="replay-box">
        <p>You {outcome}! Would you like to play again?</p>
        <button onClick={newGame}>Restart!</button>
      </div>

    );
  }

}

export default connect(
  null,
  ({ newGame })
)(Replay);
