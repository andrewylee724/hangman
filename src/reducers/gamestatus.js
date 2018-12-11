//game status can be 'in progress', 'game won', 'game lost'

export const gameStatus = (state = 'in progress', action) => {
  switch (action.type) {
    case 'SET_GAME_STATUS':
      return action.payload;
    default:
      return state;
  }
}