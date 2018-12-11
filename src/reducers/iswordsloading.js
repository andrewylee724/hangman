export const isWordsLoading = (state = false, action) => {
  switch (action.type) {
    case 'SET_WORDS_LOADING':
      return action.payload;
    default:
      return state;
  }
}