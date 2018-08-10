import React, { Component } from 'react'
import { BottomNavigator } from './components'
import { HomeContainer, SwiperContainer } from './styled'

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
