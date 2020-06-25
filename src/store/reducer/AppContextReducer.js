export const AppContextReducer = function (state, action) {

  switch (action.type) {
    case 'UPDATE_THEME':
      return {
        ...state,
        activeMainTheme: action.theme
      }
    default:
      return state;
  }
}