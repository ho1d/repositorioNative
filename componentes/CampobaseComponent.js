import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  QuienesSomos  from './QuienesSomos';
import Contacto from './ContactoComponent';


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
          headerTitleAlign:'center',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle excursión',
          headerTitleAlign:'center',
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
          headerTitleAlign:'center',
        }}
      />
    </Stack.Navigator>
  );
}
function QuienesSomosNavegador() {
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
        component={QuienesSomos}
        options={{
          title: 'Quiénes Somos',
          headerTitleAlign:'center',
        }}
      />
    </Stack.Navigator>

  )
}

function ContactoNavegador() {
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
        component={Contacto}
        options={{
          title: 'Contacto',
          headerTitleAlign:'center',
        }}
      />
    </Stack.Navigator>

  )
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
      <Drawer.Screen name="Quiénes Somos" component={QuienesSomosNavegador} />
      <Drawer.Screen name="Calendario" component={CalendarioNavegador} />
      <Drawer.Screen name="Contacto" component={ContactoNavegador} />
    </Drawer.Navigator>
  );
}


class Campobase extends Component {

  render() {

    return (
      <NavigationContainer>
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador />
        </View>
      </NavigationContainer>
    );
  }
}

export default Campobase;