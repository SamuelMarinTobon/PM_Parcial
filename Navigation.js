import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//screen
import Default from './src/screens/Default';
import HomeScreen from './src/screens/HomeScreen';
import Information from './src/screens/Information';
import Missing from './src/screens/Missing';
import StackScreen from './src/screens/StackScreen';

const TabNav = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <StackNav.Navigator initialRouteName='Home'>
      <StackNav.Screen name='Home' component={HomeScreen} />
      <StackNav.Screen name='Stack' component={StackScreen} />
    </StackNav.Navigator>
  );
}

function DefaultStack() {
  return (
    <StackNav.Navigator initialRouteName='Default'>
      <StackNav.Screen name='Default' component={Default} />
      <StackNav.Screen name='Stack' component={StackScreen} />
    </StackNav.Navigator>
  );
}
function InformationStack() {
  return (
    <StackNav.Navigator initialRouteName='Information'>
      <StackNav.Screen name='Information' component={Information} />
      <StackNav.Screen name='Stack' component={StackScreen} />
    </StackNav.Navigator>
  );
}
function MissingStack() {
  return (
    <StackNav.Navigator initialRouteName='Missing'>
      <StackNav.Screen name='Missing' component={Missing} />
      <StackNav.Screen name='Stack' component={StackScreen} />
    </StackNav.Navigator>
  );
}

function MyTabs() {
  return (
    <TabNav.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarActiveTintColor: 'red' }}>
      <TabNav.Screen name='Home' component={HomeStackScreen} />
      <TabNav.Screen name='Default' component={DefaultStack} />
      <TabNav.Screen name='Information' component={InformationStack} />
      <TabNav.Screen name='Missing' component={MissingStack} />
    </TabNav.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
