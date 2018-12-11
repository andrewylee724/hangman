import { combineReducers } from 'redux';
import { word } from './word';
import { words } from './words';
import { isWordsLoading } from './iswordsloading';
import { guesses } from './guesses';
import { strikes } from './strikes';

const rootReducer = combineReducers({
  word,
  words,
  isWordsLoading,
  guesses,
  strikes,
});

export default rootReducer;
