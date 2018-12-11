import React from 'react';
import Display from '../containers/Display';
import Input from '../containers/Input';
import IncorrectGuesses from '../containers/IncorrectGuesses';

const HangMan = () => {
  return (
    <div className="game_wrapper">
      <main className="wrapper main">
        <Display />
        <Input />
      </main>
      <aside className="wrapper side">
        <IncorrectGuesses />
      </aside>
    </div>
  );
}

export default HangMan;