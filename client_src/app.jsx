import React from 'react';
import {render} from 'react-dom';
import AllLists from './containers/allLists.jsx'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'


var store = createStore(reducer);

class App extends React.Component {
  render () {
    return <div>
      <p> Hello React!</p>
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
