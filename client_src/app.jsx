import React from 'react';
import {render} from 'react-dom';
import Page from './component/MainPage.js'
import { applyMiddleware,createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import ListsService from './api/ListsService.js'
import {setListOfLists} from './actions'
import { Router, Route, hashHistory } from 'react-router'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();


var store = createStore(reducer,
                          applyMiddleware(thunk,logger));

  render(
    <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Page}/>
    </Router>
    </Provider>,
    document.getElementById('app')
  )
//Init the list
ListsService.getList(
          (json)=>{store.dispatch(setListOfLists(json))}//on success read the server list
          ,(err)=>{console.log("Could not get the list from the server"+err)});//on error reading the list
