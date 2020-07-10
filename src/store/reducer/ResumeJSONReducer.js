import _ from "lodash"

export const ResumeJSONReducer = function (state, action) {
  let temp;

  const swapArrItem = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
    return arr;
  }
  const swapArrItemProp = (arr, a, b, prop) => {
    let temp = arr[a][prop];
    arr[a][prop] = arr[b][prop];
    arr[b][prop] = temp
    return arr;
  }

  switch (action.type) {
    case 'UPDATE':
      return action.data
    case 'UPDATE_ONE_VALUE':
      _.set(state, action.key, action.value);
      temp = JSON.parse(JSON.stringify(state));
      return temp;
    case 'SWAP_SECTION':
      state.body = swapArrItem(state.body, action.draggingI, action.target);
      state.body = swapArrItemProp(state.body, action.draggingI, action.target, 'mainSide');
      state.body = swapArrItemProp(state.body, action.draggingI, action.target, 'isVisible');
      temp = JSON.parse(JSON.stringify(state));
      return temp;
    default:
      return state;
  }
}