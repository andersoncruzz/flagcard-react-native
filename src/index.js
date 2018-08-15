import React, { Component } from 'react'
import { BottomNavigator } from './components'
import { HomeContainer, SwiperContainer } from './styled'
import {Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <HomeContainer>
        <SwiperContainer />
        <BottomNavigator />
      </HomeContainer>
    )
  }
}

export default App
