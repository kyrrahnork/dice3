import React, { Component } from 'react';
import { 
  Text 
} from 'react-native';

import {
  createStackNavigator
} from 'react-navigation';

import SplashScreen from './android/app/src/Splash/Splash';

import StartScreen from './android/app/src/Start/Start';

const RootStack = createStackNavigator(
  {
    Splash: SplashScreen,
    Start: StartScreen  
  },
  {
    initialRouteName: 'Splash'
  }
)

export default class App extends Component {

  render() {
    return (
      <RootStack />
    );
  }
}


