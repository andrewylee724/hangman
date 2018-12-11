import React from 'react';
import '../styles/LetterBlock.scss';

const LetterBlock = ({letter, faded = false}) => {
  const letterBlockClass = faded ? "square faded" : "square";
  return(
    <li className={letterBlockClass}>
        {letter}
    </li>
  )
}

export default LetterBlock;