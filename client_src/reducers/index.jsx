import SET_LIST_OF_LISTS from '../actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_LIST_OF_LISTS:
      return action.listOflists;
    default:
      return state
  }
}

export default reducer;
