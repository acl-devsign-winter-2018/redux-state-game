import React, { Component } from 'react';
import { connect } from 'react-redux';
import './image.css';

class Image extends Component {

  render() {
    const { image, text, gameEnd, incorrect } = this.props;

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
    text: state.text,
    incorrect: state.incorrect 
  }),
  null
)(Image);