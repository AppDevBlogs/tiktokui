import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Components/Home';

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-home" size={22} color={focused ? '#fff' : 'gray'} />
        ),
      },
    },
    Discover: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="ios-compass"
            size={22}
            color={focused ? '#fff' : 'gray'}
          />
        ),
      },
    },
    Add: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-add" size={22} color={focused ? '#fff' : 'gray'} />
        ),
      },
    },
    Inbox: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-mail" size={22} color={focused ? '#fff' : 'gray'} />
        ),
      },
    },
    Me: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon name="ios-person" size={22} color={focused ? '#fff' : 'gray'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        height: 50,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: '#000',
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(Tabs);
