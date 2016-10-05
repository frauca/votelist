export const SET_LIST_OF_LISTS = 'SET_LIST_OF_LISTS'


export const setListOfLists = list => ({
  type: SET_LIST_OF_LISTS,
  list:list
})

export const retrieveListOflists = dispatch  => {
  return fetch('/lists')
    .then(response => (response.json()))
    .then(json=>{
      console.log('A ver si si leny'+json);
      console.log(json);
      dispatch(setListOfLists(json));
    });
}
