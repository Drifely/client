import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native'

class Logo extends Component {
  render() {
    return (
      <View>
        <Text style={style.logo}>DRIVELY</Text>
      </View>
    );
  }
}

const style = StyleSheet.create ({
  logo: {
    fontSize: 40,
    fontFamily: 'Octicons',
    color: 'white'
  }
})

export default Logo;