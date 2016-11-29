import React from 'react'
import UserProfile from '../containers/UserProfile.js'

class Menu extends React.Component {
  render () {
    return  <div className="col-md-3 left_col">
      <div className="left_col scroll-view">

        <div className="navbar nav_title" style={{border: 0}}>
          <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Vote list!</span></a>
        </div>
        <div className="clearfix"></div>

        <UserProfile/>

        <br />

        {/*sidebar menu*/}
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">

          <div className="menu_section">
            <h3>General</h3>
            <ul className="nav side-menu">
              <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu" style={{display: "none"}}>
                  <li><a href="index.html">Dashboard</a>
                  </li>
                  <li><a href="index2.html">Dashboard2</a>
                  </li>
                  <li><a href="index3.html">Dashboard3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu_section">
            <h3>Live On</h3>
            <ul className="nav side-menu">
              <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu" style={{display:"none"}}>
                  <li><a href="e_commerce.html">E-commerce</a>
                  </li>
                  <li><a href="projects.html">Projects</a>
                  </li>
                  <li><a href="project_detail.html">Project Detail</a>
                  </li>
                  <li><a href="contacts.html">Contacts</a>
                  </li>
                  <li><a href="profile.html">Profile</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
        {/*/sidebar menu*/}

        {/*menu footer buttons*/}
        <div className="sidebar-footer hidden-small">
          <a data-toggle="tooltip" data-placement="top" title="Settings">
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </a>
          <a data-toggle="tooltip" data-placement="top" title="FullScreen">
            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
          </a>
          <a data-toggle="tooltip" data-placement="top" title="Lock">
            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
          </a>
          <a data-toggle="tooltip" data-placement="top" title="Logout">
            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
          </a>
        </div>
        {/*/menu footer buttons*/}
      </div>
    </div>

;
  }
}

export default Menu;
