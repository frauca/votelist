import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';



class ListOfLists extends Component {

  render () {
    var lists=this.props.lists;
    return  <ul>
    {lists.map(list =>
        <li key={list._id}> {list.description}</li>
    )}

    </ul>;
  }
}

ListOfLists.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListOfLists;
