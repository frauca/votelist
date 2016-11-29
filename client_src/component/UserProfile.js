import React from 'react'


class UserAnonimous extends React.Component{
  render () {
  return  {/* menu prile quick info*/}
    <div className="profile">
      <div className="profile_pic">
      </div>
      <div className="profile_info">
        <span>No login</span>
        <h2>No user</h2>
      </div>
    </div>
    {/* /menu prile quick info*/}
  }
}

class UserProfileInfo extends React.Component{
  render () {
    let user=this.props.user.getBasicProfile();
   return  {/* menu prile quick info*/}
    <div className="profile">
      <div className="profile_pic">
        <img src={user.getImageUrl()} alt=""/>
      </div>
      <div className="profile_info">
        <span>Welcome</span>
        <h2>{user.getName()}</h2>
      </div>
    </div>
    {/* /menu prile quick info*/}
  }
}

class UserProfile extends React.Component {
  render () {
    if(this.props.user.isLoged){
      return  <UserProfileInfo user={this.props.user.user}/>;
    }else{
      return  <UserAnonimous/>;
    }

  }
}

export default UserProfile;
