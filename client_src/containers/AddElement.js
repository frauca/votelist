import { connect } from 'react-redux'
import AddComponent from '../component/AddElement.js'
import {addList,postElement} from '../actions'
import ListsService from '../api/ListsService.js'

const addListOnServer=(dispatch,name,desc)=>{
  const child=ListsService.createChild(name,desc)
  dispatch(postElement(child));
}

const mapDispatchToProps=(dispatch,ownProps)=> {
  return { addElement: (name,desc)=>{addListOnServer(dispatch,name,desc) }}
}
export default connect(null,mapDispatchToProps)(AddComponent)
