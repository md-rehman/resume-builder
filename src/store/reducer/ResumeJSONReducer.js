export const ResumeJSONReducer = function (state, action) {

  switch (action.type) {
    case 'UPDATE':
      return action.data
    default:
      return state;
  }
}