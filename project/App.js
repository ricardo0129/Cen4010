import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import MyTickets from './src/MyTickets';
import AcceptedTickets from './src/AcceptedTickets';
import PreviewPage from './src/PreviewPage';
import TabNavigation from './src/TabNavigation'

const Stack = createStackNavigator();

const App = () => {

  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />

        
        <Stack.Screen name ="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

registerRootComponent(App);