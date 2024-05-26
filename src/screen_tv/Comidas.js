import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import comidas from '../data/comidas';

const Comidas = () => {
  const informacion = comidas;

  return (
    <View style={styles.container}>
      <FlatList
        data={informacion}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={item.foto} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};
export default Comidas;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: StatusBar.currentHeight || 20,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Dimensions.get('window').width - 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});