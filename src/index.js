import React from 'react';
import ReactDOM from 'react-dom';
import Hangman from './components/Hangman';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './styles/index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Hangman />
  </Provider>
  , document.getElementById('root'));