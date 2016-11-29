import { connect } from 'react-redux'
import UserNotLoged from '../component/UserNotLoged.js'
import {setGoogleUser} from '../actions'

const userLoged=(dispatch,user)=>{
  dispatch(setGoogleUser(user));
}

const mapDispatchToProps=(dispatch,ownProps)=> {
  return { userLoged: (user)=>{userLoged(dispatch,user) }}
}
export default connect(null,mapDispatchToProps)(UserNotLoged)
