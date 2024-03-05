import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function CharacterCard({ item }) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode="stretch" />
      <View style={[styles.column]}>
        <Text style={[styles.text]}>{item.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  row: {
    backgroundColor: '#85DCFA', 
    flex: 1,
    flexDirection: "row",
    margin:10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold" ,
    color:'#063E3D'
  }
});