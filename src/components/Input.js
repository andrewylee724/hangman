import React from 'react';
import _ from 'lodash';
import '../styles/Input.scss';

class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isGuessingWord: false,
    }

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  startNewGame = () => {
    const { startNewGame, words } = this.props;

    const randomWord = _.sample(words);

    console.log('new word is', randomWord);

    startNewGame(randomWord);
  }

  handleKeyDown = (event) => {
    const { guesses, updateGuesses } = this.props;
    const { isGuessingWord } = this.state;
    const key = event.key.toLowerCase();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');

    if(isGuessingWord) {
      return;
    }

    if(!letters.includes(key)) {
      return;
    }

    if(!guesses.includes(key)) {
      updateGuesses(key);
    }
  }

  handleKeyClick = (key) => {
    const { updateGuesses } = this.props;
    key = key.toLowerCase();
    console.log('key is clicked!', key);

    updateGuesses(key);
  }

  submitGuess = (event) => {
    event.preventDefault();

    const { updateGuesses } = this.props;
    const guess = this.input.value.toLowerCase();  

    if(guess.trim().length === 0) {
      return;
    }
    console.log('your guess is', guess);

    this.setState({
      isGuessingWord: false,
    });

    updateGuesses(guess);
  }

  toggleInputMethod = () => {
    this.setState({
      isGuessingWord: !this.state.isGuessingWord
    });
  }

  renderInput = () => {
    const { isGuessingWord } = this.state;
    const { gameStatus } = this.props;

    if (gameStatus !== 'in progress') {
      return this.renderGameOver();
    } else {
      return isGuessingWord
      ? this.renderSubmitForm()
      : this.renderKeyboard()
    }
  }

  renderKeyboard = () => {
    const { guesses } = this.props;

    const convertToKeys = (str) => {
      return str.split('').map(key => {
        return (
          <span 
            key={key}
            className={ guesses.includes(key) ? 'key cancelled' : 'key'}
            onClick={() => guesses.includes(key) ? '' : this.handleKeyClick(key)}>
            {key}
          </span>
        );
      })
    };

    return (
      <section>
        <div className="guess_message">
          Know the whole answer?
        </div>
        <button
          onClick={this.toggleInputMethod} 
          className="guess_button" 
          type="click">
          Make a Guess
        </button>
        <div className="keyboard">
          <div>
            {convertToKeys('qwertyuiop')}
          </div>
          <div>
            {convertToKeys('asdfghjkl')}
          </div>
          <div>
            {convertToKeys('zxcvbnm')}
          </div>
        </div>
      </section>
    );
  }

  renderSubmitForm = () => {
    return (
      <div>
        <h5>Make your guess</h5>
        <form onSubmit={this.submitGuess}>
          <input className="type_word" ref={node => { this.input = node }} type="text" />
          <input className="submit_word" type="submit" value="submit" />
        </form>
      </div>
    );
  }

  renderGameOver = () => {
    const { startNewGame } = this.props;

    return (
      <button 
        className="start_game" 
        type="click"
        onClick={this.startNewGame}>
        Start New Game
      </button>
    )
  }

  render() {
    const { isGuessingWord } = this.state;
    const { gameStatus } = this.props;

    return (
      <section>
        {
          this.renderInput()
        }
      </section>
    );
  }
}

export default Input;