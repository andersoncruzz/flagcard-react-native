import styled from 'styled-components'

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
export const ScrollNavigator = styled.ScrollView.attrs({
  contentContainerStyle: () => ({
    alignItems: 'center',
    justifyContent: 'center',
  }),
})`
  height: 300;
  background-color: rgb(2, 77, 165));
  width: 100%;
`
export const NavigatorContent = styled.View`
  width: auto;
  height: auto;
`


export const Box = styled.View`
  background-color: rgb(230,230,230);
  height: 230;
${'' /* width: 45%; */}
  width: 250;
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
