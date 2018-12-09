import React from 'react';
import LetterBlock from './LetterBlock';
import '../styles/Display.scss';

class Display extends React.Component {

  componentDidUpdate(prevProps) {
    if(prevProps.guesses !== this.props.guesses) {
      this.checkGuess();
    }

    if(prevProps.strikes != this.props.strikes) {
      this.checkGameOver();
    }
  }

  checkGuess = () => {
    const { word, guesses, updateStrikes } = this.props;
    const guess = guesses[guesses.length - 1];

    console.log('guess is', guess);
    if (word.includes(guess)) {
      console.log('you guessed right!');
      this.checkGameOver();
    } else {
      console.log('you guessed wrong!');
      updateStrikes();
    }
  }

  checkGameOver = () => {
    if (this.isGameWon()) {
      console.log('game is won!');
    }

    if (this.isGameLost()) {
      console.log('game is lost!');
    }
  }

  isGameWon = () => {
    const { guesses, word } = this.props;

    //Check if every letter has been guessed
    return word.split('').reduce( (accum, char) => {
      return accum && guesses.includes(char);
    }, true);
  }

  isGameLost = () => {
    const { strikes } = this.props;
    return strikes === 6;
  }

  renderLetters = () => {
    const { word, guesses } = this.props;
    console.log('word is', word, 'guesses is', guesses);

    if(word) {
      return word.split('').map( letter => {
        return guesses.includes(letter) 
          ? <LetterBlock key={Math.random()} letter={letter}/>
          : <LetterBlock key={Math.random()} letter='_'/>
      })
    } else {
      return 'Loading Word...';
    }
  }

  renderGuesses = () => {
    const { guesses } = this.props;

    if(guesses.length > 0) {
      return guesses.map( guess => {
        return (
          <li>
            {guess}
          </li>
        );
      })
    } else {
      return ' no guesses yet';
    }
  }

  render() {
    const { strikes } = this.props;
    const MAX_STRIKES = 6;

    return (
      <section>
        <header>
          Hangman
        </header>
        <div>
          Guesses Left:&nbsp;{MAX_STRIKES - strikes}
        </div>
        <ul>
          Your Past Guesses:
          {this.renderGuesses()}
        </ul>
        <ul id='words_letters'>
          {this.renderLetters()}
        </ul>
      </section>
    );
  }
}

export default Display;