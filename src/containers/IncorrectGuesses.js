import { connect } from 'react-redux';
import { addGuesses, addStrike } from '../actions';
import IncorrectGuesses from '../components/IncorrectGuesses';

const mapStateToProps = state => ({
  guesses: state.guesses,
  word: state.word,
})

export default connect(mapStateToProps)(IncorrectGuesses);