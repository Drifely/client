import React, { Component } from 'react';
import {Container, Content, Button, Text} from 'native-base'

class Form extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#494E6B' }}>
        <Content>
          <Text style={{ color: 'white' }}>Ini Halaman Form</Text>
            <Button warning rounded onPress={ () => this.props.navigation.navigate('Tutorial')}><Text> Warning </Text></Button>
        </Content>
      </Container>
    );
  }
}

export default Form;