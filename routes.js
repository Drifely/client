import React from 'React'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Welcome from './components/Welcome'
import GetInfo from './components/GetInfo'
import Form from './components/Form'
import Tutorial from './components/SampleTutorial'
import PrimaryScreen from './components/PrimaryScreen'

export const HomeStack = StackNavigator ({
  Welcome: {
    screen: Welcome
  },
  SnapSim: {
    screen: GetInfo
  },
  Form: {
    screen: Form
  },
  Tutorial: {
    screen: Tutorial
  },
  Primary: {
    screen: PrimaryScreen
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})