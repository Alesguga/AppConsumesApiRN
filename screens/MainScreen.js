import React from 'react';
import { View, Text, Image, SafeAreaView,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import FakeButton from '../components/FakeButton';
import { useNavigation } from '@react-navigation/native';

const MainScreen = ({ navigation }) => {
  
  return ( //pantalla principal con el logo, el slider con juegos de ejemplo y botón para acceder a la segunda pantalla
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Swiper style={styles.wrapper} showsButtons={true} horizontal={true}>
        <View style={styles.slide}>
          <Image source={require('../assets/Halo_Combat_Evolved.png')}style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/ovw2.png')}style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/gow.png')}style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/lol.png')}style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/wii.png')}style={styles.image}/>
        </View>
      </Swiper>
      <FakeButton onPress={() => navigation.navigate('tabs')} title="Ir a otra pantalla" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#BEEBFA',
      padding:20
    },
    logo: {
      width: 300,
      height: 300,
      marginBottom: 20,
    },
    wrapper: {
      height: 400,
      marginBottom: 20,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '80%',
      height: '50%',
      resizeMode: 'stretch',
      borderRadius: 15,
    }
  });
export default MainScreen;