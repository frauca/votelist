export const SET_LIST_OF_LISTS = 'SET_LIST_OF_LISTS'


export const setListOfLists = list => ({
  type: SET_LIST_OF_LISTS,
  list
})

export const retrieveListOflists = ()  => {
  console.log("fetch the list of list");
  return fetch('/lists')
    .then(response => (setListOfLists(response.json)))
}
