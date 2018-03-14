import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadLeaderboard } from './actions';

class Leaderboard extends Component {

  componentDidMount() {
    this.props.loadLeaderboard();
  }

  render() {

    const { scores } = this.props;

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Outcome</th>
          </tr>
          {scores.map((score) => {
            return (
              <tr key={score.key}>
                <td>{score.player}</td>
                <td>{score.score}</td>
                <td>{score.outcome}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default connect(
  state => ({ scores: state.scores }),
  ({ loadLeaderboard })
)(Leaderboard); 