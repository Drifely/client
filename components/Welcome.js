import React, { Component } from 'react';
import { Image,StyleSheet, AsyncStorage} from 'react-native'
import {Container, Content, Button, Text, Left } from 'native-base'
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
      <Container style={{ backgroundColor: '#494E6B' }}>
        <Content>
          <Left>
            <Logo></Logo>
          </Left>
          <Left style={{ marginBottom: 10 }}>
         <Image style={styles.img} source={image.img} />
         </Left>
         <Left
         style={{marginBottom:10}}>
          <Text style={styles.welcome}>Ini Halaman Welcome</Text>
          </Left>
          <Left>
            <Button success bordered onPress={ () => this.props.navigation.navigate('SnapSim')}><Text> Drive </Text></Button>
          </Left>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  img : {
    height: 400,
    flex: 1
  },
  welcome : {
    color: '#fff',
  }
})

export default Welcome;