import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CalendarioNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5dade2' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Listado excursiones',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle excursión',
        }}
      />
    </Stack.Navigator>
  );
}
function HomeNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5dade2' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={{
          title: 'Campo Base',
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavegador() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c2d3da',
      }}
      initialRouteName="Inicio"
    >
      <Drawer.Screen name="Inicio" component={HomeNavegador} />
      <Drawer.Screen name="Calendario" component={CalendarioNavegador} />
    </Drawer.Navigator>
  );
}


class Campobase extends Component {

  render() {

    return (
      <NavigationContainer>
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador/>
        </View>
      </NavigationContainer>
    );
  }
}

export default Campobase;