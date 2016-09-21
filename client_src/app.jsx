import React from 'react';
import {render} from 'react-dom';
import ListOfLists from './component/listOflists'

class App extends React.Component {
  render () {
    return <div>
      <p> Hello React!</p>
      <ListOfLists/>
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
