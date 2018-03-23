import React, { Component } from 'react';
import {Container, Content, Button, Text} from 'native-base'

class SnapSim extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#494E6B' }}>
        <Content>
          <Text style={{ color: 'white' }}>Ini Halaman Foto Sim</Text>
            <Button warning rounded onPress={ () => this.props.navigation.navigate('Form')}><Text> Warning </Text></Button>
        </Content>
      </Container>
    );
  }
}

export default SnapSim ;