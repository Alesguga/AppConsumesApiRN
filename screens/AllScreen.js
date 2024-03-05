import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native';
import { getAllJuegos } from '../service/ApiJuegos';
import GameCard from '../components/GameCard'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AllScreen = () => {
  const [juegos, setJuegos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchJuegos();
  }, []);

  const fetchJuegos = async () => {
    try {
      const juegosData = await getAllJuegos();
      console.log('Datos de juegos obtenidos:', juegosData); // Imprimir datos obtenidos
      if (juegosData && juegosData.length > 0) {
        setJuegos(juegosData);
      } else {
        console.log('Datos de juegos obtenidos: vacío');
      }
    } catch (error) {
      console.error('Error fetching juegos:', error);
    }
  };

  const handleSearch = (text) => {
    setSearchValue(text);
  };

  const filteredJuegos = juegos.filter((juego) =>
    juego.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="search-web" size={24} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar juego"
          value={searchValue}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        style={{ backgroundColor: '#BEEBFA' }}
        data={filteredJuegos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GameDetails', { item: item })}>
            <GameCard item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#BEEBFA'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    margin:10,
    borderRadius: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
});

export default AllScreen;