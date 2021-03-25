import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import 'localstorage-polyfill';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/Login"
import Registration from './src/Registration';
import TicketCreation from './src/TicketCreation';
import ShowTickets from './src/ShowTickets'

const Stack = createStackNavigator();

const App = () => {

  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name ="TicketCreation" component={TicketCreation} />
        <Stack.Screen name="ShowTickets" component={ShowTickets} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

registerRootComponent(App);
