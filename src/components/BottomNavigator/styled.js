import styled from 'styled-components'

export const ScrollNavigator = styled.ScrollView.attrs({
  contentContainerStyle: () => ({
    alignItems: 'center',
    justifyContent: 'center',
  }),
})`
  height: 150;
  background-color: rgb(2, 77, 165));
  width: 100%;
`

export const NavigatorContent = styled.View`
  padding: 20px;
`

export const NavigatorBox = styled.View`
  ${'' /* background-color: rgba(255, 255, 255, 0.1); */}
  background-color: rgb(0,175,203);
  height: 120;
  width: 100;
  margin-right: 10;
  border-radius: 3;
  padding: 8px;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: #FFF;
`

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
