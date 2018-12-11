import { combineReducers } from 'redux';
import { word } from './word';
import { words } from './words';
import { isWordsLoading } from './iswordsloading';
import { guesses } from './guesses';
import { strikes } from './strikes';
import { gameStatus } from './gamestatus';

const rootReducer = combineReducers({
  word,
  words,
  isWordsLoading,
  guesses,
  strikes,
  gameStatus,
});

export default rootReducer;
