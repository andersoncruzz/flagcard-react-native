import React, { Component } from 'react'
import { BottomNavigator, PanelFeedbackSaldo } from './components'
import { HomeContainer, SwiperContainer } from './styled'
import {Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <HomeContainer>
        <SwiperContainer />
        <PanelFeedbackSaldo />
        <BottomNavigator />
      </HomeContainer>
    )
  }
}

export default App
