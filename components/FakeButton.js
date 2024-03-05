import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

// Componente FakeButton: un botón personalizado
const FakeButton = ({ onPress, title}) => {
  return (
    <Pressable onPress={onPress}>
      {/* Contenedor del botón con estilo y posible cambio si está deshabilitado */}
      <View style={[styles.buttonContainer]}>
        {/* Texto del botón */}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

// Estilos del componente FakeButton
const styles = StyleSheet.create({
  // Estilos del contenedor del botón
  buttonContainer: {
    backgroundColor: '#129494', // Color de fondo del botón
    padding: 14, // Espaciado interno del botón
    borderRadius: 8, // Borde redondeado del botón
  },
  // Estilos del texto del botón
  buttonText: {
    color: '#fff', // Color del texto del botón
    textAlign: 'center', // Alineación del texto al centro
    fontSize: 22, // Tamaño de fuente del texto del botón
    fontWeight: 'bold', // Peso de la fuente del texto del botón
  }
});

export default FakeButton; // Exporta el componente FakeButton