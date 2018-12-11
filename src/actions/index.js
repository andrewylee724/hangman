import { convertStringToArray } from "../helper";

export const addStrike = () => ({
  type: 'ADD_STRIKE'
});

export const addGuesses = (guess) => ({
  type: 'ADD_GUESS',
  guess,
});

export const setWord = (word) => ({
  type: 'SET_WORD',
  word,
});

export const setWordsLoading = (bool) => ({
  type: 'SET_WORDS_LOADING',
  payload: bool,
});

export const updateWords = (words) => ({
  type: 'ADD_WORDS',
  words,
});

export const setGameStatus = (status) => ({
  type: 'SET_GAME_STATUS',
  payload: status,
});

export const setNewGame = (word) => ({
  type: 'SET_NEW_GAME',
  word,
});

export const fetchFromAPI = () => {
  return (dispatch) => {
    dispatch(setWordsLoading(true));

    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const API = 'http://app.linkedin-reach.io/words';

    fetch(CORS_PROXY+API)
      .then(resp => resp.text())
      .then(words => { 
        words = convertStringToArray(words);
        dispatch(updateWords(words));
        dispatch(setWordsLoading(false));
      });
  };
};
