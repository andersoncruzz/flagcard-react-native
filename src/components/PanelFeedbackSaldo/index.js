import React, { Component } from 'react'
import {Icon, Box, Msg, Saldo, Cifra } from './styled'
import { card} from '../../assets/panelFeedback'

class PanelFeedbackSaldo extends Component{

  render(){
      return(
          <Box>
            <Icon height={65} width={65} source={card}/>
            <Msg> Você não fez nenhuma compra nos últimos 15 dias.</Msg>
            <Cifra>R${' '}<Saldo>886,34</Saldo></Cifra>
            <Msg>Aguardando compra</Msg>
          </Box>
      )
  }
}

export default PanelFeedbackSaldo
