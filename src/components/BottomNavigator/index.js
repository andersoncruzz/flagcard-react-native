import React, { Component } from 'react'
import { Image } from 'react-native'
import { ScrollNavigator, NavigatorContent, NavigatorBox, Title } from './styled'
import { indicator, deposit, transfer, ajust } from '../../assets/home'

class BottomNavigator extends Component {
  state = {
    menuItems: [
      { name: 'Indicar amigos', source: indicator },
      { name: 'Depositar', source: deposit },
      { name: 'Transferir', source: transfer },
      { name: 'Ajustar Limite', source: ajust },
    ],
  }

  renderMenusItems = ({ name, source }, index) => (
    <NavigatorBox key={`${name}-${index}`}>
      <Image style={{ height: 40, width: 40 }} source={source} />
      <Title>{name}</Title>
    </NavigatorBox>
  )

  render() {
    const { menuItems } = this.state

    return (
      <NavigatorContent>
        <ScrollNavigator
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {menuItems.map(this.renderMenusItems)}

        </ScrollNavigator>
      </NavigatorContent>

    )
  }
}

export default BottomNavigator
