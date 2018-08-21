import React, { Component } from 'react'
import {Icon, Box, Msg, Saldo, Cifra, ScrollNavigator, NavigatorContent } from './styled'
import { card} from '../../assets/panelFeedback'

class PanelFeedbackSaldo extends Component{

  state = {
    boxItems: [
      {
        msg1: 'Você não fez nenhuma compra nos últimos 15 dias.',
        unidade: 'R$',
        saldo: '886,34',
        msg2: 'Aguardando compra',
        source: card
      },
      {
        msg1: 'Compras',
        unidade: 'L',
        saldo: '1.006,34',
        msg2: 'Devendo nao sei quantos reais, vamos ver quando vai pagar',
        source: card
      },
    ]
  }

  renderBoxItems = ({msg1, unidade, saldo, msg2, source}, index) => (
    <Box key={`${index}`}>
      <Icon height={65} width={65} source={source}/>
      <Msg> {msg1} </Msg>
      <Cifra>{unidade}{' '}<Saldo>{saldo}</Saldo></Cifra>
      <Msg>{msg2}</Msg>
    </Box>
  )

  render(){
      const {boxItems} = this.state
      return(
          <NavigatorContent>
            <ScrollNavigator
              horizontal
              showsHorizontalScrollIndicator={true}>
              {boxItems.map(this.renderBoxItems)}
          </ScrollNavigator>
        </NavigatorContent>
      )
  }
}

export default PanelFeedbackSaldo
