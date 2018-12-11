import { connect } from 'react-redux';
import { addGuesses, setNewGame } from '../actions';
import Input from '../components/Input';

const mapStateToProps = state => ({
  guesses: state.guesses,
  gameStatus: state.gameStatus,
  words: state.words,
})

const mapDispatchToProps = dispatch => ({
  updateGuesses: (guess) => dispatch(addGuesses(guess)),
  startNewGame: (word) => {
    console.log('starting new game');
    dispatch(setNewGame(word));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);