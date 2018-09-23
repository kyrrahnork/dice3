import React, { Component } from 'react';
import { 
  Text 
} from 'react-native';

import {
  createStackNavigator
} from 'react-navigation';

import SplashScreen from './android/app/src/Splash/Splash';

import StartScreen from './android/app/src/Start/Start';

import Abilities from './android/app/src/Abilities/Abilities';

import PanTest from './android/app/src/Testing/PanTest';

//this suppresse the yellow box warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

const RootStack = createStackNavigator(
  {
    Splash: SplashScreen,
    Start: StartScreen,
    Abilities: Abilities,
    PanTest: PanTest
  },
  {
    initialRouteName: 'PanTest'
  }
)

export default class App extends Component {

  render() {
    return (
      <RootStack />
    );
  }
}


