import _ from "lodash"

export const ResumeJSONReducer = function (state, action) {

  switch (action.type) {
    case 'UPDATE':
      return action.data
    case 'UPDATE_ONE_VALUE':
      _.set(state, action.key, action.value);
      return state;
    default:
      return state;
  }
}