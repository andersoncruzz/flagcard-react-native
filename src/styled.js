import styled from 'styled-components'
import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';


export const HomeContainer = styled.View`
  flex: 1;
  background-color: rgb(2, 77, 165);
`

export const SwiperContainer = styled.View`
  flex: 1;
  margin-left: 20;
  margin-right: 20;
  align-items: center;
  justify-content: center;
`

export const SwiperItemMock = styled.View`
  width: 100%;
  height: 350;
  background-color: white;
  borderRadius: 5;
`

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Rect = StyleSheet.create({
  rectangle: {
    marginTop: 20,
    marginLeft: 20,
    width: width-30,
    height: height-60,
    borderRadius: 10,
    borderWidth: 3.0,
    borderColor: '#ff9400',

  }
});
