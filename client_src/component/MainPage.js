import React from 'react'
import Menu from './Menu.js'
import TopNavigation from './TopNavigation.js'
import PageContent from './PageContent.js'

class MainPage extends React.Component {
  render () {
    return  <div >
      <Menu/>
      <TopNavigation/>
      <PageContent/>
    </div>
;
  }
}

export default MainPage;
