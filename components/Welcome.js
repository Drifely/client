import React, { Component } from 'react';
import { Image } from 'react-native'
import {Container, Content, Button, Text, Left} from 'native-base'
import Logo from './Logo'

const image = {
  img: require('../images/lambang.png')
}

class  Welcome extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#494E6B' }}>
        <Content>
          <Left>
            <Logo></Logo>
          </Left>
          <Left>
         <Image style={{ height: 400, flex: 1 }} source={image.img} />
         </Left>
          <Text style={{ color: 'white' }}>Ini Halaman Welcome</Text>
          <Left>
            <Button warning rounded onPress={ () => this.props.navigation.navigate('SnapSim')}><Text> Warning </Text></Button>
          </Left>
        </Content>
      </Container>
    );
  }
}

export default Welcome;