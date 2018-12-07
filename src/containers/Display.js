import { connect } from 'react-redux';
import Display from '../components/Display';
import { addStrike } from '../actions';

const mapStateToProps = state => ({
  word: state.word,
  guesses: state.guesses,
  strikes: state.strikes,
})

const mapDispatchToProps = dispatch => ({
  updateStrikes: () => {console.log('running updateStrikes'); dispatch(addStrike())},
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);