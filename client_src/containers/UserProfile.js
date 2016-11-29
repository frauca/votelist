import UserProfile from '../component/UserProfile.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(UserProfile)
