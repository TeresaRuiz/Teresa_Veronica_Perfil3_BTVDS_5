import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground source={require('../../assets/TTPD.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido a nuestra App!</Text>
        <Text style={styles.subtitle}>Perfil de evaluación #3</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
