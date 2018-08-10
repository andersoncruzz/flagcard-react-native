import React, { Component } from 'react'
import { BottomNavigator } from './components'
import { HomeContainer, SwiperContainer } from './styled'

class App extends Component {
  render() {
    return (
      <HomeContainer style={{ flex: 1, backgroundColor: 'rgb(109, 33, 119)' }}>
        <SwiperContainer />
        <BottomNavigator />
      </HomeContainer>
    )
  }
}

export default App
