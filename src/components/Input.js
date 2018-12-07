import React from 'react';

class Input extends React.Component {

  MAX_STRIKES = 6;
  input = React.createRef();

  submitGuess = (e) => {
    e.preventDefault();
    
    const { updateGuesses, updateStrikes } = this.props;
    const guess = this.input.value;

    console.log('guess is', guess)

    updateGuesses(guess);

    // const { guesses } = this.state;
    // const guess = this.input.value;

    // this.setState({
    //   guesses: [...guesses, guess],
    // }, this.checkGuess);
  }

  render() {
    const { submitGuess } = this.props;

    return (
      <section>
        <form onSubmit={this.submitGuess}>
          <input className="interactions" ref={node => { this.input = node }} type="text" />
          <input className="interactions" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default Input;