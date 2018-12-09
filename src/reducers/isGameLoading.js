export const isGameLoading = (state = false, action) => {
  switch (action.type) {
    case 'SET_TRUE':
      return true;
    case 'SET_FALSE':
      return false;
    case 'TOGGLE_LOADING':
      return !state;
    default:
      return state;
  }
}