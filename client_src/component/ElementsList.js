import React, { Component,PropTypes} from 'react'
import {render} from 'react-dom';
import AddElement from '../containers/AddElement.js'


class ElementsList extends Component {

  render () {
    return   <div className="x_panel">
              <div className="x_title">
                <h2>Elements</h2>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <ul className="messages msg_list">
                {this.props.lists.map((list, index) =>
                  <li key={list._id}>
                    <div className="message_wrapper">
                      <h4 className="heading">{list.name}</h4>
                      <blockquote className="message">{list.description}</blockquote>
                    </div>
                 </li>
                )}
                 <AddElement/>
                </ul>
              </div>
            </div>
  }
}

ElementsList.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ElementsList;
