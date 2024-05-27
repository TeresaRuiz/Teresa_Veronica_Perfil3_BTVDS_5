import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; // Asegúrate de importar FontAwesome5
import WelcomeScreen from '../src/screens/WelcomeScreen';
import StudentsScreen from '../src/screens/StudentsScreen';
import FoodsScreen from '../src/screens/FoodsScreen';   // Asegúrate de importar WelcomeScreen

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Estudiantes') {
              iconName = 'user-graduate';
            } else if (route.name === 'Comidas') {
              iconName = 'utensils';
            } else if (route.name === 'Bienvenida') {
              iconName = 'handshake'; // Cambia el icono para la pestaña de Bienvenida
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF69B4', // Color de la pestaña activa
          inactiveTintColor: '#009929', // Color de la pestaña inactiva
          style: {
            backgroundColor: '#a6e6e6', // Color de fondo del menú
          },
          labelStyle: {
            fontSize: 14, // Tamaño de la etiqueta
          },
        }}
      >
        <Tab.Screen
          name="Bienvenida"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="handshake" size={size} color={color} /> // Icono para la pestaña de Bienvenida
            ),
          }}
        />
        <Tab.Screen name="Estudiantes" component={StudentsScreen} />
        <Tab.Screen name="Comidas" component={FoodsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
