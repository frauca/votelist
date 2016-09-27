import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';
import {retrieveListOflists} from '../actions'


class ListOfLists extends Component {

 componentDidMount() {
    console.log("Call once to fecth initial list");
    retrieveListOflists();
  }
  render () {
    return  <ul>
    {lists.map(lists =>
        <li> Hello React!</li>
    )}

    </ul>;
  }
}

ListOfLists.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListOfLists;
