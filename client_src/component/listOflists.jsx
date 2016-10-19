import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';
import AddList from '../containers/AddList.js'
import AllElements from '../containers/AllElements.js'


class ListOfLists extends Component {

  render () {

    var lists=this.props.lists;

    return   <div className="x_panel">
              <div className="x_title">
                <h2>All the aviable lists</h2>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <ul className="messages msg_list">
                {lists.map((list, index) =>
                  <li key={list._id}>
                    <div className="message_wrapper"                    
                        onClick={this.props.selectList.bind(this,index)}>
                      <h4 className="heading">{list.name}</h4>
                      <blockquote className="message">{list.description}</blockquote>
                    </div>
                    { this.props.selected==index?
                        <AllElements/>
                        :
                        ''
                    }
                 </li>
                )}
                 <li>
                  <AddList/>
                 </li>
                </ul>
              </div>
            </div>
  }
}

ListOfLists.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListOfLists;
