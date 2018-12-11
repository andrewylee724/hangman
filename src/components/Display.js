import React from 'react';
import LetterBlock from './LetterBlock';
import Drawing from './Drawing';
import { getRandomWord } from '../helper';
import '../styles/Display.scss';

class Display extends React.Component {

  componentDidMount() {
    const { fetchFromAPI } = this.props;
    fetchFromAPI();
  }

  componentDidUpdate(prevProps) {
    const { guesses, strikes, words, setRandomWord } = this.props;

    if(prevProps.guesses !== guesses) {
      this.checkGuess();
    }

    if(prevProps.strikes !== strikes) {
      this.checkGameOver();
    }

    if(prevProps.words !== words) {
      let randomWord = getRandomWord(words);
      console.log('sampled word is', randomWord);
      setRandomWord(randomWord);
    }
  }

  checkGuess = () => {
    const { word, guesses, updateStrikes, setGameStatus } = this.props;
    const guess = guesses[guesses.length - 1];

    console.log('guess is', guess);
    if (word === guess) {
      console.log('you guessed the whole word right!');
      setGameStatus('game won');
    } else if (word.includes(guess)) {
      console.log('you guessed right!');
      this.checkGameOver();
    } else {
      console.log('you guessed wrong!');
      updateStrikes();
    }
  }

  checkGameOver = () => {
    const { setGameStatus } = this.props;

    if (this.isGameWon()) {
      console.log('game is won!');
      setGameStatus('game won');
    }

    if (this.isGameLost()) {
      console.log('game is lost!');
      setGameStatus('game lost');
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
    const { word, guesses, gameStatus } = this.props;
    console.log('word is', word, 'guesses is', guesses);

    if (gameStatus === 'game lost') {
      return this.renderLettersWhenLost();
    } else if(word) {
      return word.split('').map( letter => {
        return guesses.includes(letter) 
          ? <LetterBlock key={Math.random()} letter={letter}/>
          : <LetterBlock key={Math.random()} letter='_'/>
      })
    } else {
      return 'Loading Word...';
    }
  }

  renderLettersWhenLost = () => {
    const { word, guesses } = this.props;
    console.log('YOU LOSTTTTTTTT', word, guesses);
    return word.split('').map( letter => {
      return guesses.includes(letter) 
        ? <LetterBlock key={Math.random()} letter={letter}/>
        : <LetterBlock key={Math.random()} faded="true" letter={letter}/>
    })
  }

  render() {
    const { strikes, isWordsLoading, gameStatus } = this.props;
    const MAX_STRIKES = 6;

    const message ={
      'in progress': 'Hangman',
      'game won': 'You Won!',
      'game lost': 'You Lost!'
    };

    return (
      <section>
        <header>
          {message[gameStatus]}
        </header>
        <div>
          Strikes Left:&nbsp;{MAX_STRIKES - strikes}
        </div>
        <Drawing
          strikes={strikes}
          />
        <ul id='words_letters'>
          {isWordsLoading
            ? 'Loading Word...'
            : this.renderLetters()}
        </ul>
      </section>
    );
  }
}

export default Display;