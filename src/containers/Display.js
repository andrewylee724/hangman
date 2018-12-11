import { connect } from 'react-redux';
import Display from '../components/Display';
import { addStrike, fetchFromAPI, setWord, setGameStatus } from '../actions';

const mapStateToProps = state => ({
  word: state.word,
  words: state.words,
  isWordsLoading: state.isWordsLoading,
  guesses: state.guesses,
  strikes: state.strikes,
  gameStatus: state.gameStatus,
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
  setGameStatus: (status) => {
    dispatch(setGameStatus(status));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);