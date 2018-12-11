import React from 'react';
import ReactDOM from 'react-dom';
import Hangman from './components/Hangman';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './styles/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Hangman />
  </Provider>
  , document.getElementById('root'));