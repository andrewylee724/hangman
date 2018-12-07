export const strikes = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_STRIKE':
      return state + 1;
    default: 
      return state;
  }
}