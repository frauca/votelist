import React from 'react'
import UserLogin from '../containers/UserLogin.js'

class TopNavigation extends React.Component {
  render () {
    return  <div className="top_nav">
    {/*top navigation*/}
      <div className="nav_menu">
        <nav className="" role="navigation">
          <div className="nav toggle">
            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
          </div>
          <div id="my-signin2"></div>
          <UserLogin/>
        </nav>
      </div>
    {/*top navigation*/}
    </div>

;
  }
}

export default TopNavigation;
