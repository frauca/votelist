import ListsService from '../api/ListsService.js'

export const SET_LIST_OF_LISTS = 'SET_LIST_OF_LISTS'
export const ADD_LIST = 'ADD_LIST'
export const SELECT_LIST = 'SELECT_LIST'
export const ADD_ELEMENT = 'ADD_ELEMENT'

export const setListOfLists = list => ({
  type: SET_LIST_OF_LISTS,
  list:list
})

export const addList = list => ({
  type: ADD_LIST,
  list:list
})

export const selectList = index =>({
  type: SELECT_LIST,
  index
})


export const addElement = (element,selected)=>({
  type:ADD_ELEMENT,
  selected,
  element
})


export const postElement= element =>(dispatch, getState)=>{
  let selected=getState().selectedList;
  dispatch(addElement(element,selected))
  ListsService.saveList(getState().listOfLists[selected])
}
