import React from 'react';
import '../styles/IncorrectGuesses.scss';
import '../styles/LetterBlock.scss';

const IncorrectGuesses = (props) => {
  const { word, guesses } = props;
  const splitWord = word.split('');

  return (
    <section>
      <h5>Incorrect Guesses</h5>
      <ul id="incorrect_guesses">
        {guesses.map(guess => {
          if(guess.length > 1) {
            return <li className="word">{guess}</li>
          }

          if(!splitWord.includes(guess)) {
            return <li className="block">{guess}</li>
          }
        })}
      </ul>
    </section>
  )
}
export default IncorrectGuesses;