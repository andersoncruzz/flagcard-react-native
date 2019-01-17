import styled from 'styled-components'
import {
  StyleSheet
} from 'react-native'

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin-right: 75%;
`
export const Box = styled.View`
  background-color: rgb(230,230,230);
  ${'' /* height: 230;
  width: 85%;
  margin-left: 25;
  margin-right: 10;
  border-radius: 3;
  padding: 8px; */}
  flex: 1;
  justify-content: center;
  ${'' /* align-items: center; */}

`
export const Title = styled.Text`
  color: #FFF;
`
export const MsgTop = styled.Text`
  color: #808080
  fontSize: 16
  fontFamily: "HelveticaNeue-Condensed"
`

export const MsgBottom = styled.Text`
  color: #808080
  fontSize: 16
  fontFamily: "HelveticaNeue-Thin"
`
export const Cifra = styled.Text`
  color: #00afcb
  fontSize: 30
  fontFamily: "HelveticaNeue-Light"
`

export const Saldo = styled.Text`
  color: #00afcb
  fontSize: 50
  fontFamily: "HelveticaNeue-Light"
`
const backgroundColor = "#E6E6E6"

export const Slide = StyleSheet.create({
 wrapper: {
 },
 style: {
   flex: 1,
   justifyContent: 'center',
   fontSize: 30,
   alignItems: 'center',
   backgroundColor: backgroundColor
 },
 text: {
   color: '#fff',
   fontWeight: 'bold'
 }
})
