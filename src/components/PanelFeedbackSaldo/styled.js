import styled from 'styled-components'

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
export const Box = styled.View`
  background-color: rgb(230,230,230);
  height: 280;
  width: 85%;
  margin-left: 25;
  margin-right: 10;
  border-radius: 3;
  padding: 8px;
  justify-content: space-between;
`
export const Title = styled.Text`
  color: #FFF;
`
export const Msg = styled.Text`
  color: #808080
  fontSize: 16
`
export const Cifra = styled.Text`
  color: #00afcb
  fontSize: 30
`

export const Saldo = styled.Text`
  color: #00afcb
  fontSize: 45
`
