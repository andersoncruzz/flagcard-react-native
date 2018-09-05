import React, { Component } from 'react'
import { BottomNavigator, SlideWindow, UserSettings } from './components'
import { HomeContainer, SwiperContainer } from './styled'
import {Text} from 'react-native';

class App extends Component {
  render() {
    console.log("aqui")
    return (
      <HomeContainer>

        {/* <SwiperContainer /> */}
        <UserSettings />
        <SlideWindow />
        <BottomNavigator />

      </HomeContainer>
    )
  }
}

export default App
