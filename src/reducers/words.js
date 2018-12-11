export const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...state, ...action.words];
    default: 
      return state;
  }
}