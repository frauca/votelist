import React from 'react'
import UserNotLoged from '../containers/UserNotLoged.js'



class UserIsLoged extends React.Component{
  render () {
    let user=this.props.user.getBasicProfile();
    return  <ul className="nav navbar-nav navbar-right">
      <li className="">
        <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <img src={user.getImageUrl()} alt=""/>{user.getName()}
          <span className=" fa fa-angle-down"></span>
        </a>
        <ul className="dropdown-menu dropdown-usermenu animated fadeInDown pull-right">
          <li><a href="javascript:;">  Profile</a>
          </li>
          <li>
            <a href="javascript:;">
              <span className="badge bg-red pull-right">50%</span>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">Help</a>
          </li>
          <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
          </li>
        </ul>
      </li>
    </ul>;
  }
}

class UserLogin extends React.Component {
  render () {
    if(this.props.user.isLoged){
      return  <UserIsLoged user={this.props.user.user}/>;
    }else{
      return  <UserNotLoged/>;
    }

  }
}

export default UserLogin;
