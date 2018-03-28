import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Linking, StyleSheet, AsyncStorage, Image, Alert } from 'react-native'
import { Container, Body, Right,Title, Header, Icon, Content, Footer, FooterTab, Button, Text, View, Left } from 'native-base';
import BgGeo from './BackgroundGeo'
import AwGeo from './AwGeo'
import Gyro from './gyro'
import axios from 'axios'
import MapView, { Marker } from 'react-native-maps'



class Primary extends Component {
  constructor () {
    super () 
    this.state = {
      showSpeed: false,
      showNavigation: false
    }
  }
  
    sendSMS = () => {
      AsyncStorage.getItem('token')
      .then(value => {
        axios.get('http://drifely-s.wizawt.com/users/emergency', {headers: {token:value}})
        .then(result => {
          if (result) {
            Alert.alert('Help is on the way')
          } 
          else {
            console.warn(result);
            console.warn('matiajalo');
          }
        })
      })
  }
  warnLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      Linking.canOpenURL(`https://www.google.com/maps/search/${position.coords.latitude}, ${position.coords.longitude}`)
      .then(supported => {
        if (!supported) {
          console.warn('not supported');
        } else {
          // this.sendSMS()
          return Linking.openURL(`https://www.google.com/maps/search/${position.coords.latitude}, ${position.coords.longitude}`)
        }
      })
      .catch(err => {
        console.warn(err);
      })
    })
    
  }
  logout = () => {
    console.log('hahahahaha')
    AsyncStorage.removeItem('token')
    this.props.navigation.navigate('Welcome')
  }
  
  emergency = () => {
    this.sendSMS()
  }
  render() {
    return (
      <Container>
        <Image source={require('../assets/logo.png')} style={{width:'auto',height:200}}></Image>
          <AwGeo />
          <Gyro />
        {/* <Content /> */}
        <Footer>
          <FooterTab>
            <Button vertical
              onPress = {this.emergency}>
              <Icon active name="warning" />
              <Text>Emergency</Text>
            </Button>
            <Button vertical
              onPress = {this.warnLocation}
              >
              <Icon active name="navigate" />
              <Text>My-Loc !</Text>
            </Button>
            <Button vertical
              onPress={() => this.logout()}>
              <Icon active name="log-out" />
              <Text>Log-out</Text>
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