import React from 'react';
import '../styles/Input.scss';

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

  handleKeyClick = () => {
    console.log('key is clicked!');
  }

  renderKeyboard = () => {

    const convertToKeys = (str) => {
      return str.split('').map(key => {
        return (
          <span 
            key={key}
            className="key"
            onClick={this.handleKeyClick}>
            {key}
          </span>
        );
      })
    };

    return (
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
    );
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitGuess}>
          <input className="interactions" ref={node => { this.input = node }} type="text" />
          <input className="interactions" type="submit" value="Submit" />
        </form>

        {this.renderKeyboard()}
      </section>
    );
  }
}

export default Input;