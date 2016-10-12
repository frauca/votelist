import { connect } from 'react-redux'
import AddListBlock from '../component/AddListBlock.js'
import {addList} from '../actions'
import ListsService from '../api/ListsService.js'

const addListOnServer=(name,desc)=>{
  ListsService.addList(name,desc,
    json=>{//-success callback
        addList(list)
    },
    error=>{//error calback
      console.log('Error on server list add')
    }
  );
}

const mapDispatchToProps=(dispatch)=> {
  return { addList: addListOnServer }
}
export default connect(null,mapDispatchToProps)(AddListBlock)
