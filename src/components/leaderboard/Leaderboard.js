import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadLeaderboard } from './actions';

class Leaderboard extends Component {

  componentDidMount() {
    this.props.loadLeaderboard();
  }

  render() {

    const { scores } = this.props;

    // const sortedScores = scores.sort((a, b) => a.score - b.score);

    // console.log(sortedScores);

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {scores.map((score, index) => {
            return (
              <tr key={index}>
                <td>{score.player}</td>
                <td>{score.score}</td>
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