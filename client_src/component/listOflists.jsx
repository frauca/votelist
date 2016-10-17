import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';
import AddList from '../containers/AddList.js'



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
                  <li key={list._id}
                      onClick={this.props.selectList.bind(this,index)}>
                    <div className="message_wrapper">
                      <h4 className="heading">{list.name}</h4>
                      <blockquote className="message">{list.description}</blockquote>
                    </div>
                    {(() => {
                    console.log("selected"+this.props.selected+" "+index)
                      if(this.props.selected==index){
                      return(<div>EI ma i'm been clicked</div>)
                      }
                    })()}
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
