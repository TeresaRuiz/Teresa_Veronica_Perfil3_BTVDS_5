import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';

const students = [
  { id: '1', name: 'Teresa Yessenia Ruiz González', carnet: '20220651', photo: 'https://avatars.githubusercontent.com/u/107508345?v=4' },
  { id: '2', name: 'Veronica Alejandra Sánchez Rosales', carnet: '20220505', photo: 'https://avatars.githubusercontent.com/u/161611738?v=4' },
  // Agrega más estudiantes según sea necesario
];

const StudentsScreen = () => {
  return (
    <ImageBackground source={require('../../assets/fondoC.jpeg')} style={styles.background}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.carnet}>{item.carnet}</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  carnet: {
    fontSize: 16,
  },
});

export default StudentsScreen;