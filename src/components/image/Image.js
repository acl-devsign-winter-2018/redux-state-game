import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemonImage, getPokemonText } from './actions';
import './image.css';
import { setOutcome } from '../replay/actions';

class Image extends Component {

  state = {
    incorrect: 0,
    correct: 0
  };

  componentWillReceiveProps(nextProps) {
    const { word } = this.props;
    const mostRecentGuess = nextProps.guesses[nextProps.guesses.length - 1];
    (!word.includes(mostRecentGuess) && mostRecentGuess) ? this.setState({ incorrect: this.state.incorrect + 1 }, this.checkOutcome) : this.setState({ correct: this.state.correct + 1 }, this.checkOutcome); //if the random word includes the most recent guess, and there is a most recent guess
  }

  checkOutcome() {
    const { setOutcome, word } = this.props;
    if(this.state.incorrect === 6) setOutcome('lose');
    if(this.state.correct === word.length) setOutcome('win');
    console.log(this.state.correct !== word.length);
    console.log(word.length);
    console.log(this.state.correct);
  }
  render() {
    const { image, text, word } = this.props;
    const { incorrect, correct } = this.state;

    return (
      <figure>
        <div className="image-box">
          <img src={image} alt='image of pokemon you are guessing'/>
          {(correct !== word.length) && Array(6 - incorrect).fill().map((ignore, i) => (
            <span key={i} className={`incorrect incorrect-${6 - i}`}></span>
          ))}
        </div>
        <figcaption>{text}</figcaption>
      </figure>
    );
  }
}

export default connect(
  state => ({ guesses: state.guesses, word: state.word, image: state.image, text: state.text }),
  ({ getPokemonImage, getPokemonText, setOutcome })
)(Image);