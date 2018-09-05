import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import { card} from '../../assets/panelFeedback'
import {Icon, Box, Msg, Saldo, Cifra, ScrollNavigator, NavigatorContent, Slide } from './styled'

class SlideWindow extends Component{

  state = {
    boxItems: [
      {
        msg1: 'Você não fez nenhuma compra entendeu bem',
        unidade: 'R$',
        saldo: '886,34',
        msg2: 'Aguardando compra',
        source: card
      },
      {
        msg1: 'Compras',
        unidade: 'L',
        saldo: '1.006,34',
        msg2: 'Devendo nao sei quantos reais',
        source: card
      },
      {
        msg1: 'Saldos',
        unidade: 'R$',
        saldo: '231.006,34',
        msg2: 'Testes',
        source: card
      },
      {
        msg1: 'Compras',
        unidade: 'L',
        saldo: '1.006,34',
        msg2: 'Devendo nao sei quantos reais',
        source: card
      },
    ]
  }

  renderBoxItems = ({msg1, unidade, saldo, msg2, source}, index) => (
    <View key={`${index}`} style={Slide.style}>
      <Icon height={65} width={65} source={source}/>
      <Msg> {msg1} </Msg>
      <Cifra>{unidade}{' '}<Saldo>{saldo}</Saldo></Cifra>
      <Msg>{msg2}</Msg>
    </View>
  )

  render(){
    const {boxItems} = this.state
    return (
        <Swiper style={Slide.wrapper}
          // dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          // activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
             bottom: 0, left: 180, right: null
           }}
           showsButtons>
        {boxItems.map(this.renderBoxItems)}
      </Swiper>
    )
  }
}

const backgroundColor = "#E6E6E6"

export default SlideWindow
