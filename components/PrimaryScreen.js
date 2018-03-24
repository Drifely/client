import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Linking } from 'react-native'
import { Container, Header, Icon, Content, Footer, FooterTab, Button, Text, View } from 'native-base';
import BgGeo from './BackgroundGeo'
import AwGeo from './AwGeo'
import Gyro from './gyro'

class Primary extends Component {
  constructor () {
    super () 
    this.state = {
      showSpeed: false,
      showNavigation: false
    }
  }
  warnLocation = () => {
    console.warn('masuk sini niii');
    console.warn(this.props.location);
    Linking.canOpenURL(`https://www.google.com/maps/search/${this.props.location.latitude}, ${this.props.location.longitude}`)
    .then(supported => {
      if (!supported) {
        console.warn('not supported');
      } else {
        return Linking.openURL(`https://www.google.com/maps/search/${this.props.location.latitude}, ${this.props.location.longitude}`)
      }
    })
    .catch(err => {
      console.warn(err);
    })
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {/* <BgGeo></BgGeo> */}
<<<<<<< HEAD
          <Gyro />
          <AwGeo />
    {/* {this.state.showNavigation ? <BgGeo></BgGeo> : null}
=======
          <Gyro></Gyro>
          {/* {this.state.showNavigation ? <BgGeo></BgGeo> : null}
>>>>>>> eb3eb2af457768968291c7303cec80400ba62b4f
          <Gyro></Gyro> */}
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical
              onPress={() => this.setState({showNavigation:true})}>
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