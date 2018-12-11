import { connect } from 'react-redux';
import Display from '../components/Display';
import { addStrike, fetchFromAPI, setWord } from '../actions';

const mapStateToProps = state => ({
  word: state.word,
  words: state.words,
  isWordsLoading: state.isWordsLoading,
  guesses: state.guesses,
  strikes: state.strikes,
})

const mapDispatchToProps = dispatch => ({
  fetchFromAPI: () => { 
    dispatch(fetchFromAPI());
  },
  updateStrikes: () => {
    dispatch(addStrike())
  },
  setRandomWord: (word) => {
    dispatch(setWord(word));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);