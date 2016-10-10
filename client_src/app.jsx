import React from 'react';
import {render} from 'react-dom';
import AllLists from './containers/allLists.jsx'
import AddList from './containers/AddList.js'
import { applyMiddleware,createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import ListsService from './api/ListsService.js'
import {setListOfLists} from './actions'
import { Router, Route, hashHistory } from 'react-router'
import createLogger from 'redux-logger';

const logger = createLogger();


var store = createStore(reducer,
                          applyMiddleware(logger));

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
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
    </Provider>,
    document.getElementById('app')
  )
//Init the list
ListsService.getList(
          (json)=>{store.dispatch(setListOfLists(json))}//on success read the server list
          ,(err)=>{console.log("Could not get the list from the server"+err)});//on error reading the list
