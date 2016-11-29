import { connect } from 'react-redux'
import ElementsList from '../component/ElementsList'

const elementLists=(state)=>{
  const listOfLists=state.listOfLists[state.selectedList];
  if(listOfLists.childs){
    return listOfLists.childs
  }else{
    return [];
  }
}

const mapStateToProps = (state) => {
  return {
    lists: elementLists(state)
  }
}

export default connect(mapStateToProps)(ElementsList)
