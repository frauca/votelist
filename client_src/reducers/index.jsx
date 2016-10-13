import {SET_LIST_OF_LISTS,ADD_LIST,SELECT_LIST} from '../actions'
import { combineReducers } from 'redux'

const listOfLists = (state = [], action) => {
  switch (action.type) {
    case SET_LIST_OF_LISTS:
      return action.list;
    case ADD_LIST:
      return [...state,action.list];
    default:
      return state
  }
}

const selectedList =(state = -1, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.selected;
    default:
      return state
  }
}

export default combineReducers({listOfLists,selectedList});
