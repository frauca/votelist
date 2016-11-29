import {SET_LIST_OF_LISTS,ADD_LIST,SELECT_LIST,ADD_ELEMENT,SET_USER} from '../actions'
import { combineReducers } from 'redux'

const user = (state={isLoged:false},action)=>{
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}

const listOfElements = (state=[],action)=>{
  switch (action.type) {
    case ADD_ELEMENT:
      return [...state,action.element]
    default:
      return state
  }
}

const listOfLists = (state = [], action) => {
  switch (action.type) {
    case SET_LIST_OF_LISTS:
      return action.list;
    case ADD_LIST:
      return [...state,action.list];
    case ADD_ELEMENT:
      return state.map((list,index)=>{
          if(index===action.selected){
            return Object.assign({}, list, {
                childs:listOfElements(list.childs,action)
              })
          }else{
            return list
          }
      })
    default:
      return state
  }
}

const selectedList =(state = -1, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.index;
    default:
      return state
  }
}

export default combineReducers({listOfLists,selectedList,user});
