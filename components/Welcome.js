import React, { Component } from 'react';
import { Image,StyleSheet, AsyncStorage} from 'react-native'
import {Container, Content, Button, Text, Left, H3 } from 'native-base'
import Logo from './Logo'

const image = {
  img: require('../images/lambang.png')
}

class  Welcome extends Component {
  componentWillMount() {
    AsyncStorage.getItem('token')
      .then(data => {
        if (data) {
          this.props.navigation.navigate('Tutorial')
        }
      })
  }
  render() {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center',backgroundColor: '#EAEAEA' }}>
        <Content style={{flex: 1, }}>
          <Left style={{ marginBottom: 10}}>
         <Image style={styles.img} source={require('../assets/logo.png')} />
         </Left>
         <Left
         style={{marginBottom:10}}>
          <H3 style={styles.welcome}>Prepare your Driver's License</H3>
          </Left>
          <Left>
            <Button style={{marginTop:10}} success bordered onPress={ () => this.props.navigation.navigate('SnapSim')}><Text> Drive </Text></Button>
          </Left>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  img : {
    height: 200,
    width: 350,
    flex: 1
  },
  welcome : {
    color: '#334C8E',
    paddingBottom: 10,
  }
})

export default Welcome;