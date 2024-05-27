import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native';

const foods = [
  {
    id: '1',
    name: 'Burritos',
    description: 'El burrito, burrito de harina, ​ taco de harina es un platillo mexicano', 
    image: 'https://cdn7.kiwilimon.com/brightcove/8626/640x640/8626.jpg.webp'
  },

  {
    id: '2',
    name: 'Café',
    description: 'El café es la bebida que se obtiene mediante el percolado de agua caliente a través de los granos tostados', 
    image: 'https://phantom-marca.unidadeditorial.es/ccc965176944c82a899cc39f32a97f4a/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/17/16922909769586.jpg'
  },

  {
    id: '3',
    name: 'Empanadas',
    description: 'Las empanadas salvadoreñas son un delicioso platillo tradicional de El Salvador, conocido por su sabor único y su preparación distintiva.', 
    image: 'https://www.recetassalvador.com/base/stock/Recipe/empanadas-salvadorenas/empanadas-salvadorenas_web.jpg'
  },

  {
    id: '4',
    name: 'Papas',
    description: 'Las papas fritas o patatas fritas, también conocidas como papas a la francesa, son un plato de patatas que se cocinan mediante fritura', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpug1YePSqT-34QaSdL9Tpz0DMDRvQbxXKPxi1TX6avg&s'
  },

  {
    id: '5',
    name: 'Pupusas',
    description: 'La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.​ ', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97BJxFH8EaifKJuu-uiD_o7Yfd29wS8iQEGkZ6p9cvA&s'
  },

  {
    id: '6',
    name: 'Pescado frito',
    description: 'El pescado frito es un plato tradicional del litoral mediterráneo', 
    image: 'https://www.comedera.com/wp-content/uploads/2022/05/pescado-frito-con-tostones-y-ensalada-500x500.jpg'
  },

  {
    id: '7',
    name: 'Cóctel',
    description: 'El coctel/cóctel de camarones o de gambas es un plato caliente servido como aperitivo o entrante', 
    image: 'https://assets.unileversolutions.com/recipes-v2/252247.jpg'
  },

];

const FoodsScreen = () => {
  return (
    <ImageBackground source={require('../../assets/DOWN BAD.jpeg')} style={styles.background}>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
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
  description: {
    fontSize: 16,
  },
});

export default FoodsScreen;
