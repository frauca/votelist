import React from 'react';
import {render} from 'react-dom';
import AllLists from './containers/allLists.jsx'
import AddList from './containers/AddList.js'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import ListsService from './api/ListsService.js'
import {setListOfLists} from './actions'


var store = createStore(reducer);

class App extends React.Component {
  render () {
    return <div>
      <p> Hello React--!</p>
      <AddList/>
      <AllLists/>
    </div>;
  }
}

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
//Init the list
ListsService.getList(
          (json)=>{store.dispatch(setListOfLists(json))}//on success read the server list
          ,(err)=>{console.log("Could not get the list from the server"+err)});//on error reading the list
