/* eslint-disable react-native/no-inline-styles */
// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import ThirdPage from './src/screens/ThirdPage';
import ProfilePage from './src/screens/ProfilePage';
import LoginPage from './src/screens/LoginPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('./src/assets/images/drawerWhite.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function profileScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: 'Profile Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function loginScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: 'Logini Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}>
        <Drawer.Screen
          name="ProfilePage"
          options={{
            drawerIcon: ({focused, size}) => (
              <Icon name="user" size={25} color={focused ? 'red' : 'blue'} />
            ),
            drawerLabel: 'Profile',
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="FirstPage"
          options={{
            drawerIcon: ({focused, size}) => (
              <Icon name="home" size={25} color={focused ? 'red' : 'blue'} />
            ),
            drawerLabel: 'Home',
          }}
          component={profileScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerIcon: ({focused, size}) => (
              // <Icon name="setting" size={25} color={focused ? 'red' : 'blue'} />
              <FontAwesome5 name="cogs" color={focused ? 'red' : 'blue'} />
            ),
            drawerLabel: 'Settings',
          }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="LoginPage"
          options={{
            drawerIcon: ({focused, size}) => (
              // <Icon name="setting" size={25} color={focused ? 'red' : 'blue'} />
              <FontAwesome5 name="sign" color={focused ? 'red' : 'blue'} />
            ),
            drawerLabel: 'Sign-In',
          }}
          component={loginScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
