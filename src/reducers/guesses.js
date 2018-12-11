export const guesses = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_GAME':
      return [];
    case 'ADD_GUESS':
      return [...state, action.guess];
    default: 
      return state;
  }
}