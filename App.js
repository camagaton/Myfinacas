import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { View, Text,StatusBar } from 'react-native';

import firebase from './src/services/firebaConnection';
import Routes from './src/routes';


export default function App() {
 return (
   <NavigationContainer>
    <StatusBar backgroundColor='#131313' barStyle={'light-content'}/>
    <Routes/>
   </NavigationContainer>
  );
}