import React from 'react';
import '../styles/LetterBlock.css';

const LetterBlock = ({letter}) => {
  return(
    <li className="square">
        {letter}
    </li>
  )
}

export default LetterBlock;