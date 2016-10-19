import { connect } from 'react-redux'
import AddComponent from '../component/AddElement.js'
import {addList} from '../actions'
import ListsService from '../api/ListsService.js'

const mapStateToProps = (state) => {
  return {
    selected: state.selectedList
  }
}

const addListOnServer=(dispatch,name,desc,selected)=>{
  ListsService.addList(name,desc,
    json=>{//-success callback
        dispatch(addList(json))
    },
    error=>{//error calback
      console.log('Error on server list add')
    }
  );
}

const mapDispatchToProps=(dispatch,ownProps)=> {
  return { addElement: (name,desc)=>{addListOnServer(dispatch,name,desc,ownProps.selected) }}
}
export default connect(null,mapDispatchToProps)(AddComponent)
