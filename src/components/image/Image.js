import React, { Component } from 'react';
import { connect } from 'react-redux';
import './image.css';

class Image extends Component {

  state = {
    incorrect: 0
  };

  componentWillReceiveProps(nextProps) {
    const { word } = this.props;
    if(word !== nextProps.word) this.setState({ incorrect: 0 }); // checks if the incoming word is different form the current word
    const mostRecentGuess = nextProps.guesses[nextProps.guesses.length - 1];
    if(!word.includes(mostRecentGuess) && mostRecentGuess) this.setState({ incorrect: this.state.incorrect + 1 });  //if the random word includes the most recent guess, and there is a most recent guess
  }

  render() {
    const { image, text, gameEnd } = this.props;
    const { incorrect } = this.state;

    return (
      <figure>
        <div className="image-box">
          <img src={image} alt='image of pokemon you are guessing'/>
          { !gameEnd && Array(6 - incorrect).fill().map((ignore, i) => (
            <span key={i} className={`incorrect incorrect-${6 - i}`}></span>
          ))}
        </div>
        <figcaption>{text}</figcaption>
      </figure>
    );
  }
}

export default connect(
  state => ({ 
    guesses: state.guesses, 
    word: state.word, 
    image: state.image, 
    text: state.text 
  }),
  null
)(Image);