export const word = (state = 'LOWERCASE', action) => {
  switch (action.type) {
    case 'SET_WORD':
      return action.word;
    default: 
      return state;
  }
}