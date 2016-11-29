import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ListOfLists from '../component/listOflists.jsx'
import {selectList} from '../actions'

const mapStateToProps = (state) => {
  return {
    lists: state.listOfLists,
    selected:state.selectedList
  }
}

const mapDispatchToProps=(dispatch,ownProps)=> (
  { selectList:(index)=>{dispatch(selectList(index))} }
)

const AllLists = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfLists)

export default AllLists
