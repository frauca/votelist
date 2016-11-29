import React from 'react'


/**
* it will always be called on first instance if user is loged and action will be launch to change the user
**/
class UserNotLoged extends React.Component{

  constructor(props) {
    super(props);
  }


  onFailure(error) {
    console.log(error);
  }
  renderButton() {
    console.log('Set google button');
    let logUser=this.props.userLoged;
    gapi.signin2.render('googleSigIn', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSuccess.bind(this),
      'onfailure': this.onFailure
    });
  }

  onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    this.props.userLoged(googleUser);
  }

  componentDidMount(){
    console.log('Load Googles api login');
    let notLogedComponent=this;
    $.getScript( "https://apis.google.com/js/platform.js" )
      .done(function( script, textStatus ) {
        notLogedComponent.renderButton();
      })
      .fail(function( jqxhr, settings, exception ) {
        console.log('ERROR NO LOGIN COULD BE DONE');
    });

  }

  componentDidUpdate(){
    console.log('Did update');
  }
  render(){
    return <div id="googleSigIn"></div>
  }
}


export default UserNotLoged
