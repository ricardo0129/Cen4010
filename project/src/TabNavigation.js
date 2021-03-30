import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PreviewPage from './PreviewPage';
import TicketCreation from './TicketCreation';
//import MyTickets from './MyTickets';
//import AcceptedTickets from './AcceptedTickets';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="PreviewPage" component={PreviewPage} />
        <Tab.Screen name="TicketCreation" component={TicketCreation} />
        {/* <Tab.Screen name="MyTickets" component={MyTickets} />
        <Tab.Screen name="AcceptedTickets" component={AcceptedTickets} /> */}
      </Tab.Navigator>
  );
}