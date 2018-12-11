export const word = (state = 'LOWERCASE', action) => {
  switch (action.type) {
    case 'SET_NEW_GAME':
      return action.word;
    case 'SET_WORD':
      return action.word;
    default: 
      return state;
  }
}