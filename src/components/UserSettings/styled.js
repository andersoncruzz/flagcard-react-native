import styled from 'styled-components'

export const Layout = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const SessionUser = styled.Text`
  color: #00afcb;
  fontFamily: "HelveticaNeue-Condensed";
  fontSize: 20;
`
export const ButtonTriangle = styled.Text`
  color: #e6e6e6;
  fontFamily: "HelveticaNeue-Condensed";
  fontSize: 25;
`
export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
