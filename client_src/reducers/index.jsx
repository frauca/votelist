import {SET_LIST_OF_LISTS,ADD_LIST} from '../actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_LIST_OF_LISTS:
      return action.list;
    case ADD_LIST:
      return [...state,action.list];
    default:
      return state
  }
}

export default reducer;
