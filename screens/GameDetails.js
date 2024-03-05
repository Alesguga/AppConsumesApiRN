import React from 'react';
import { View, Text, StyleSheet, Linking, Image } from 'react-native';

const GameDetails = ({ route }) => {
  // Obtener el juego seleccionado de las props de la ruta
  const { item } = route.params;

  const abrirURL = () => {
    Linking.openURL(item.game_url)
      .catch((err) => console.error('Error al abrir la URL: ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode="stretch" />

      <Text style={styles.text}>{item.short_description}</Text>
      <Text style={styles.link} onPress={abrirURL}>{item.game_url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
  },
  link: {
    fontSize: 17,
    fontWeight: '500',
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  image: {
    width: '90%',
    height: '25%',
    resizeMode: 'stretch',
    borderRadius: 15,
  }
});

export default GameDetails;