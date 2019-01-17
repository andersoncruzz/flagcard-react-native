import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import { card} from '../../assets/panelFeedback'
import {Icon, Box, MsgBottom, MsgTop, Saldo, Cifra, ScrollNavigator, NavigatorContent, Slide } from './styled'

class SlideWindow extends Component{

  state = {
    boxItems: [
      {
        msgTop: 'Você não fez nenhuma compra entendeu bem',
        unidade: 'R$',
        saldo: '886,34',
        msgBottom: 'Aguardando compra',
        source: card
      },
      {
        msgTop: 'Compras',
        unidade: 'L',
        saldo: '1.006,34',
        msgBottom: 'Devendo nao sei quantos reais',
        source: card
      },
      {
        msgTop: 'Saldos',
        unidade: 'R$',
        saldo: '231.006,34',
        msgBotom: 'Testes',
        source: card
      },
      {
        msgTop: 'Compras',
        unidade: 'L',
        saldo: '1.006,34',
        msgBottom: 'Devendo nao sei quantos reais',
        source: card
      },
    ]
  }

  renderBoxItems = ({msgBottom, unidade, saldo, msgTop, source}, index) => (
    <View key={`${index}`} style={Slide.style}>
      <Icon height={65} width={65} source={source}/>
      <MsgTop> {msgTop} </MsgTop>
      <Cifra>{unidade}{' '}<Saldo>{saldo}</Saldo></Cifra>
      <MsgBottom>{msgBottom}</MsgBottom>
    </View>
  )

  render(){
    const {boxItems} = this.state
    return (
        <Swiper style={Slide.wrapper}
          // dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          // activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
           paginationStyle={{
              bottom: 0
            }}
           showsButtons>
        {boxItems.map(this.renderBoxItems)}
      </Swiper>
    )
  }
}

const backgroundColor = "#E6E6E6"

export default SlideWindow
