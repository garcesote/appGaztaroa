import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import Contacto from './ContactoComponent';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeComponent';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import QuienesSomos from './QuienesSomosComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorGaztaroaClaro, colorGaztaroaOscuro } from '../comun/comun';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavegador( {navigation} ) {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
            headerMode: 'screen',
            headerTintColor: colorGaztaroaOscuro,
            headerStyle: { backgroundColor: colorGaztaroaClaro },
            headerTitleStyle: { color: colorGaztaroaOscuro },
            headerLeft: () => (<Icon name="menu" size={28} color= {colorGaztaroaOscuro} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>)
            }}
        >
            <Stack.Screen
            name="Etxea"
            component={Home}
            options={{
                title: 'Campo Base',
            }}
            />
        </Stack.Navigator>
    );
}

function ContactoNavegador({navigation}) {
    return (
        <Stack.Navigator
            initialRouteName="Contacto"
            screenOptions={{
            headerMode: 'screen',
            headerTintColor: colorGaztaroaOscuro,
            headerStyle: { backgroundColor: colorGaztaroaClaro },
            headerTitleStyle: { color: colorGaztaroaOscuro },
            headerLeft: () => (<Icon name="menu" size={28} color= {colorGaztaroaOscuro} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>)
            }}
        >
            <Stack.Screen
            name="Contact"
            component={Contacto}
            options={{
                title: 'Contacto Gaztaroa',
            }}
            />
        </Stack.Navigator>
    );
}

function QuienesSomosNavegador({navigation}) {
  return (
      <Stack.Navigator
          initialRouteName="QuienesSomos"
          screenOptions={{
          headerMode: 'screen',
          headerTintColor: colorGaztaroaOscuro,
          headerStyle: { backgroundColor: colorGaztaroaClaro },
          headerTitleStyle: { color: colorGaztaroaOscuro },
          headerLeft: () => (<Icon name="menu" size={28} color= {colorGaztaroaOscuro} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>)
          }}
      >
          <Stack.Screen
          name="QuienesSomos"
          component={QuienesSomos}
          options={{
              title: 'Quienes Somos',
          }}
          />
      </Stack.Navigator>
  );
}

function CalendarioNavegador({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      headerMode="float"
      screenOptions={{
        headerTintColor: colorGaztaroaOscuro,
        headerStyle: { backgroundColor: colorGaztaroaClaro },
        headerTitleStyle: { color: colorGaztaroaOscuro },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
          headerLeft: () => (<Icon name="menu" size={28} color= {colorGaztaroaOscuro} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>)

        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
          headerLeft: () => (<Icon name="arrow" size={28} color= {colorGaztaroaOscuro} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>)
        }}
      />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./imagenes/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

function DrawerNavegador() {
    return (
        <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: colorGaztaroaOscuro,
          },
        }}
        >
          <Drawer.Screen name="Campo base" component={HomeNavegador}
            options={{
              drawerIcon: ({ tintColor}) => (
                <Icon
                name='home'
                type='font-awesome'            
                size={24}
                color={tintColor}
                />
              )
            }}
          />
          <Drawer.Screen name="QuinenesSomos" component={QuienesSomosNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='info-circle'
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
          }}/>
          <Drawer.Screen name="Calendario" component={CalendarioNavegador} 
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='calendar'
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
          }}
          />
          <Drawer.Screen name="Contacto" component={ContactoNavegador}
          options={{
            drawerIcon: ({ tintColor}) => (
              <Icon
              name='address-card'
              type='font-awesome'            
              size={24}
              color={tintColor}
              />
            )
          }}
          />
        </Drawer.Navigator>
    );
}

class Campobase extends Component {
  render() {
     return (
        <NavigationContainer>
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                <DrawerNavegador />
            </View>      
        </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#015afc',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Campobase;
