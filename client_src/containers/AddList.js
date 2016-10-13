import { connect } from 'react-redux'
import AddListBlock from '../component/AddListBlock.js'
import {addList} from '../actions'
import ListsService from '../api/ListsService.js'

const addListOnServer=(dispatch,name,desc)=>{
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
  return { addList: (name,desc)=>{addListOnServer(dispatch,name,desc) }}
}
export default connect(null,mapDispatchToProps)(AddListBlock)
