import React from 'react';
import { View, Text, StyleSheet, Linking, Image, FakeButton, SafeAreaView } from 'react-native';

const GameDetails = ({ route }) => {
  // Obtener el juego seleccionado de las props de la ruta
  const { item } = route.params;

  const abrirURL = () => {
    Linking.openURL(item.game_url)
      .catch((err) => console.error('Error al abrir la URL: ', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode="stretch" />

      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{item.short_description}</Text>
      </View>

      <View style={styles.linkContainer}>
        <Text style={styles.textWhite}>ENCUENTRA EL JUEGO ONLINE:</Text>

        <Text style={styles.link} onPress={abrirURL}>{item.game_url}</Text>
      </View>

      <View style={styles.infContainer}>

        <View style={styles.infContainer1}>
        <Text style={styles.textWhite}>{item.platform}</Text>
        </View>

        <View style={styles.infContainer2}>
          <Text style={styles.textWhite}>{item.publisher}</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#beebfa',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    width: '90%',

  },
  textWhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    width: '90%',
    textAlign: 'center', 
  },
  link: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    marginTop: 50,
    textTransform: 'uppercase',
    color: '#063e3d',
  },
  image: {
    width: '90%',
    height: '25%',
    resizeMode: 'stretch',
    borderRadius: 15,
    marginTop: 15,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo de color con opacidad
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#5fcfcd',
    padding: 10,
    paddingBottom: 13,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  linkContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo de color con opacidad
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#5fcfcd',
    padding: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',

  },
  infContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    
  },
  infContainer1: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#129494',
    padding: 15,
    marginVertical: 10,
    width: '45%',
    alignSelf: 'flex-start',
    paddingLeft: 22,


  },
  infContainer2: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#129494',
    padding: 15,
    marginVertical: 10,
    width: '45%',
    height: '80%',
    alignSelf: 'flex-end',
    paddingLeft: 22,

  },
});

export default GameDetails;