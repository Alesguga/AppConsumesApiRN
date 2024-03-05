import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameDetails = ({ route }) => {
  // Obtener el juego seleccionado de las props de la ruta
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GameDetails;