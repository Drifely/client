import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Linking } from 'react-native'
import { Container, Header, Icon, Content, Footer, FooterTab, Button, Text, View } from 'native-base';
import BgGeo from './BackgroundGeo'
import AwGeo from './AwGeo'
import Gyro from './gyro'
import axios from 'axios'

class Primary extends Component {
  constructor () {
    super () 
    this.state = {
      showSpeed: false,
      showNavigation: false
    }
  }
  
  sendSMS = (data) => {
    const reqBody = {
      api_key : '1ba88109',
      api_secret : '6gxuZl4lPvowscIZ',
      to : '6287877280598',
      from: 'Drifely',
      text: 'ati2 bang....pelan2 aja.....'
    }
    axios.post('https://rest.nexmo.com/sms/json', reqBody)
    .then(response => {
      console.warn(response.data);
    })
    .catch(err => {
      console.warn(err);
    })
  }
  warnLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      Linking.canOpenURL(`https://www.google.com/maps/search/${position.coords.latitude}, ${position.coords.longitude}`)
      .then(supported => {
        if (!supported) {
          console.warn('not supported');
        } else {
          this.sendSMS()
          return Linking.openURL(`https://www.google.com/maps/search/${position.coords.latitude}, ${position.coords.longitude}`)
        }
      })
      .catch(err => {
        console.warn(err);
      })
    })
    
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Gyro />
          <AwGeo />
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>Location</Text>
            </Button>
            <Button vertical
              onPress = {this.warnLocation}
              >
              <Icon active name="navigate" />
              <Text>Emergency</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical
              onPress={() => this.setState({showSpeed:true})}>
              <Icon active name="navigate" />
              <Text>ini apa ya? lupa</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



const mapStateToProps = state => {
  return {
    location: state.locationReducer
  }
}


export default connect(mapStateToProps)(Primary);