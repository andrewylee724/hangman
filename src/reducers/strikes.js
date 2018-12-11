export const strikes = (state = 0, action) => {
  switch (action.type) {
    case 'SET_NEW_GAME':
      return -1;
    case 'ADD_STRIKE':
      return state + 1;
    default: 
      return state;
  }
}