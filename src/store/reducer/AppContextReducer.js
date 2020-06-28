export const AppContextReducer = function (state, action) {

  switch (action.type) {
    case 'UPDATE_VIEW':
      return {
        ...state,
        activeView: action.view
      }
    case 'UPDATE_THEME':
      return {
        ...state,
        activeMainTheme: action.theme
      }
    case 'UPDATE_TEMPLATE':
      return {
        ...state,
        activeTemplate: action.themplate
      }
    default:
      return state;
  }
}