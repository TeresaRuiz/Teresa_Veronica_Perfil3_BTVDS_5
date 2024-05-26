import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const numColumns = 1;

const ComidasItem = ({ nombre, descripcion, foto}) => (
    <View style={styles.card}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.title}>{descripcion}</Text>
        <Image
            style={styles.image}
            source={{ uri: foto }}
        />
    </View>
);

export default ComidasItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    list: {
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        margin: 5,
        width: WIDTH / numColumns - 10,
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        textTransform: 'capitalize',
    },
    image: {
        width: 80,
        height: 80,
    },
    loading: {
        marginTop: 20,
    },
});