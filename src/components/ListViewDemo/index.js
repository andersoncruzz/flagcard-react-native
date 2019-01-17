/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// '../../assets/timeline'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class Example extends Component {
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.data = [
      {
        title: 'Flagcard Rewards',
        description: 'Parabéns, agora você acumula pontos em todos as compras e pode usá-los para apagar transações de sua fatura',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/transfer.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        // time: '',
        title: 'Novo dispositivo atualizado',
        description: 'Seu dispositivo Samsung GM-98979.',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/indicator.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        // time: '12:00',
        title: 'Cartão',
        description: 'Seu cartão está desbloqueado',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/card_blue.png'),
      },
      {
        // time: '14:00',
        title: 'Limite Inicial',
        description: 'R$ 600,00',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/deposit.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },

      {
        // time: '16:30',
        title: 'Veja como funciona',
        lineColor:'#C0C0C0',
        // description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../../assets/timeline/card_blue.png'),

        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      },
      {
        title: 'Flagcard Rewards',
        description: 'Parabéns, agora você acumula pontos em todos as compras e pode usá-los para apagar transações de sua fatura',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/transfer.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        // time: '',
        title: 'Novo dispositivo atualizado',
        description: 'Seu dispositivo Samsung GM-98979.',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/indicator.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        // time: '12:00',
        title: 'Cartão',
        description: 'Seu cartão está desbloqueado',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/card_blue.png'),
      },
      {
        // time: '14:00',
        title: 'Limite Inicial',
        description: 'R$ 600,00',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/deposit.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },

      {
        // time: '16:30',
        title: 'Veja como funciona',
        lineColor:'#C0C0C0',
        // description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../../assets/timeline/card_blue.png'),

        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      },
      {
        title: 'Flagcard Rewards',
        description: 'Parabéns, agora você acumula pontos em todos as compras e pode usá-los para apagar transações de sua fatura',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/transfer.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        // time: '',
        title: 'Novo dispositivo atualizado',
        description: 'Seu dispositivo Samsung GM-98979.',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/indicator.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        // time: '12:00',
        title: 'Cartão',
        description: 'Seu cartão está desbloqueado',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/card_blue.png'),
      },
      {
        // time: '14:00',
        title: 'Limite Inicial',
        description: 'R$ 600,00',
        lineColor:'#C0C0C0',
        icon: require('../../assets/timeline/deposit.png'),
        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },

      {
        // time: '16:30',
        title: 'Veja como funciona',
        lineColor:'#C0C0C0',
        // description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../../assets/timeline/card_blue.png'),

        // imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }      
    ]
    this.state = {selected: null}
  }

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )

    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSelected()}
        <Timeline
          showTime={false}
          style={styles.list}
          data={this.data}
          circleSize={30}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          // timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	  paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:10,

  },
  title:{
    fontSize:16,
    fontWeight: 'bold',
    color: '#00afcb'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 5
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    // marginLeft: 10,
    // color: '#00afcb'
  }
});
