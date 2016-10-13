import { connect } from 'react-redux'
import ListOfLists from '../component/listOflists.jsx'

const mapStateToProps = (state) => {
  return {
    lists: state.listOfLists
  }
}

const AllLists = connect(
  mapStateToProps
)(ListOfLists)

export default AllLists
