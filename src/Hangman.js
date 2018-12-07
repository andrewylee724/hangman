import React from 'react';

const MAX_STRIKES = 3;

class HangMan extends React.Component {
  
  state = {
    guesses: [],
    word: 'map',
    strikes: 0,
  };

  submitGuess = (e) => {
    e.preventDefault();

    const { guesses } = this.state;
    const guess = this.input.value;

    this.setState({
      guesses: [...guesses, guess],
    }, this.checkGuess);
  }

  checkGuess = () => {
    const { word } = this.state;
    const guess = this.input.value;

    console.log('guess is', guess);
    if (word.includes(guess)) {
      console.log('you guessed right!');
      this.checkGameOver();
    } else {
      const { strikes } = this.state;
      console.log('you guessed wrong!');
      this.setState({strikes: strikes + 1}, this.checkGameOver);
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
    const { guesses, word } = this.state;

    //Check if every letter has been guessed
    return word.split('').reduce( (accum, char) => {
      return accum && guesses.includes(char);
    }, true);
  }

  isGameLost = () => {
    const { strikes } = this.state;
    return strikes === MAX_STRIKES;
  }

  render() {
    let { guesses, word, attempts } = this.state;

    return (
      <div className="wrapper">
        <header>Hangman</header>
        <section>
          <ul id="letters">
          {
            word.split('').map( letter => {
              return guesses.includes(letter) 
                ? <li key={Math.random()}>{letter}</li> 
                : <li key={Math.random()}>_</li>;
            })
          }
          </ul>
        </section>
        <section>
          <form onSubmit={this.submitGuess}>
            <input className="interactions" ref={ node => { this.input = node }} type="text"/>
            <input className="interactions" type="submit" value="Submit"/>
          </form>
        </section>
      </div>
    );
  }
}

export default HangMan;