import React, {Component} from 'react'
import {SessionUser, Layout, ButtonTriangle, Icon} from './styled'
import {flagcard_icon} from '../../assets/userSettings'

class UserSettings extends Component {

  user_function = (user) =>{
    user = user.toUpperCase();
    user_changed = "";
    // user_
    for(var i = 0; i < user.length; i++) {
      user_changed = user_changed.concat(user.charAt(i));
      user_changed = user_changed.concat(" ");
    }
    return user_changed;
  }
  render(){
    const user = "Rafael Gurgel"
    return (
      <Layout>
        <Icon height={22} width={79} source={flagcard_icon} />
        <SessionUser>{this.user_function(user)}</SessionUser>
        <ButtonTriangle>{"^"}</ButtonTriangle>
      </Layout>
    )
  }
}

export default UserSettings
