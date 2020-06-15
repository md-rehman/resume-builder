export const ResumeJSONReducer = function (state, action) {

  switch (action.type) {
    case 'UPDATE':
      console.log(action)
      return action.data
    default:
      return state;
  }
}