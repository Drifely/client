/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Linking,
  ScrollView
} from 'react-native';
import Xyz from './components/xyz'
import BgGeo from './components/BackgroundGeo'
import Gyro from './components/gyro'
import SampleTutorial from './components/SampleTutorial'
import {HomeStack} from './routes'
import Primary from './components/PrimaryScreen'
import { Provider } from 'react-redux'
import store from './store/index.js'


// type Props = {};
export default class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      <HomeStack></HomeStack>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
