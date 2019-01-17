import React, { Component } from 'react'
import { BottomNavigator, SlideWindow, UserSettings } from './components'
import {ListViewDemo} from './components'
import { HomeContainer, SwiperContainer, Rect } from './styled'
import {Text, View} from 'react-native';

class App extends Component {
  render() {
    console.log("aqui")
    return (
      <HomeContainer>
        <View style={Rect.rectangle}>
          <UserSettings />
          <SlideWindow />
          <BottomNavigator />
           {/* <ListViewDemo /> */}
        </View>
      </HomeContainer>
    )
  }
}

export default App
