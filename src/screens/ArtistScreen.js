import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import ArtistList from '../components/ArtistList'
import {artistAPI} from '../utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function ArtistScreen() {
  
  return (
    
  
    // </View>

    <SafeAreaView style={styles.appBackground}>
      <StatusBar barStyle="light-content" backgroundColor={"#302B4F"} />
      <Text style={styles.title}>Artistas</Text>
      <Image source={require('../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>
      <ArtistList artists= {artistAPI.results}/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#06021B",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: "white",
    padding: 25,
    fontWeight: "bold"
  }
});