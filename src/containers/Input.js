import { connect } from 'react-redux';
import { addGuesses, addStrike } from '../actions';
import Input from '../components/Input';

const mapDispatchToProps = dispatch => ({
  updateGuesses: (guess) => dispatch(addGuesses(guess)),
})

export default connect(null, mapDispatchToProps)(Input);