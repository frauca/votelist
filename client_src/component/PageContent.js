import React from 'react'
import Footer from './Footer.js'
import AllLists from '../containers/allLists.jsx'


class PageContent extends React.Component {
  render () {
    return  <div className="right_col" role="main">
    {/*page content */}
    <div>
      <AllLists/>
    </div>

      <Footer/>
    {/*/page content */}
    </div>

;
  }
}

export default PageContent;
