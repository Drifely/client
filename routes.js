import React from 'React'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Welcome from './components/Welcome'
import GetInfo from './components/GetInfo'
import Form from './components/Form'
import Tutorial from './components/SampleTutorial'
import PrimaryScreen from './components/PrimaryScreen'
import Signup from './components/SignupForm'
import InvalidSim from './components/SimInvalid'
export const HomeStack = StackNavigator ({
  Welcome: {
    screen: Welcome
  },
  SnapSim: {
    screen: GetInfo
  },
  Form: {
    screen: Signup
  },
  Tutorial: {
    screen: Tutorial
  },
  Primary: {
    screen: PrimaryScreen
  },
  Invalid: {
    screen: InvalidSim
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})