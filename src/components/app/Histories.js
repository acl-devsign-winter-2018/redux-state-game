import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './game.css';
import { takeTurns, loadGame } from './actions';


class Histories extends PureComponent {

  componentDidMount() {
    this.props.loadGame();
  }

  render() {
    const { results } = this.props;
  
    if(!results) return null;

    return (
      <div className="history">
        <h3>Players History</h3>
        { results.length ?
          <ul className="result-ul">
            {results.map(result => (
              <li key={result.key}>{result.score}</li>
            ))}
          </ul>
          :
          <p>No history</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.gameLoad.payload
  };
}

export default connect (
  mapStateToProps,
  { takeTurns, loadGame }
)(Histories);