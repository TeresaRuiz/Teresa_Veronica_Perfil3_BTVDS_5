import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper'; // Importa el proveedor de Paper para estilos
import Estudiantes from './src/screen_tv/Estudiantes'; // Importa el componente de pantalla Estudiantes
import Comidas from './src/screen_tv/Comidas'; // Importa el componente de pantalla Comidas
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa los íconos de Material Community

const Tab = createBottomTabNavigator(); // Crea un navegador de pestañas inferior

export default function App() {
  return (
    <PaperProvider> {/* Proveedor de Paper para estilos */}
      <NavigationContainer> {/* Contenedor de navegación */}
        <Tab.Navigator
          screenOptions={({ route }) => ({ // Opciones para las pantallas en la pestaña
            tabBarIcon: ({ color, size }) => { // Ícono para cada pestaña
              let iconName;

              // Define el ícono basado en el nombre de la ruta
              if (route.name === 'Estudiantes') {
                iconName = 'school'; // Ícono para la pantalla de Estudiantes
              } else if (route.name === 'Comidas') {
                iconName = 'food'; // Ícono para la pantalla de Comidas
              }

              return <MaterialCommunityIcons name={iconName} color={color} size={size} />; // Retorna el ícono
            },
          })}
          tabBarOptions={{ // Opciones para la barra de pestañas
            activeTintColor: '#FF69B4', // Color de las pestañas activas
            inactiveTintColor: '#7CFC00' , // Color de las pestañas inactivas
          }}
        >
          <Tab.Screen name="Estudiantes" component={Estudiantes} options={{ headerShown: false }}/> {/* Pestaña para Estudiantes */}
          <Tab.Screen name="Comidas" component={Comidas} options={{ headerShown: false }} /> {/* Pestaña para Comidas */}
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
