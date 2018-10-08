import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from '../screens/Main';
import AddUser from '../screens/AddUser';

const Navigation = createStackNavigator({
  Home: Main,
  newUser: AddUser 
},
{
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: true
  }
});

export default Navigation;