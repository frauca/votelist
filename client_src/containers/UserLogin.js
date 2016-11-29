import UserLogin from '../component/UserLogin.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(UserLogin)
