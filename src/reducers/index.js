import { combineReducers } from 'redux';
import { word } from './word';
import { guesses } from './guesses';
import { strikes } from './strikes';

const rootReducer = combineReducers({
  word,
  guesses,
  strikes,
});

export default rootReducer;
