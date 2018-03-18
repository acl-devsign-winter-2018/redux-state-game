import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Letter extends Component {

  render() {

    const { letter, onSelect, guesses, index } = this.props;
    const selected = guesses.includes(letter);

    return (
      <ReactCSSTransitionGroup
        transitionName="slide-up"
        transitionAppear={true}
        transitionAppearTimeout={1800 + (index * .05)}
        transitionEnter={false}
        transitionLeave={false}>
        <button className="letter" onClick={(event) => onSelect(event.target)} value={letter} disabled={selected} style={{ 'transitionDelay': `${ index * .05 }s` }}>
          {letter}
        </button>
      </ReactCSSTransitionGroup>

    );
  }
}

export default connect(
  state => ({ guesses: state.guesses }),
  null
)(Letter);
