import React from 'react';
import { debounce } from 'lodash';
import '../styles/Input.scss';

class Input extends React.Component {

  MAX_STRIKES = 6;
  input = React.createRef();

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { guesses, updateGuesses } = this.props;
    const key = event.key.toLowerCase();
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');

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
        {/* <form onSubmit={this.submitGuess}>
          <input className="interactions" ref={node => { this.input = node }} type="text" />
          <input className="interactions" type="submit" value="Submit" />
        </form> */}

        {this.renderKeyboard()}
      </section>
    );
  }
}

export default Input;