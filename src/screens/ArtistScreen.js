import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ArtistList from '../components/ArtistList'
import {artistAPI} from '../utils/constants'

export default function ArtistScreen() {


  
  return (
    
  
    // <View style={styles.appBackground}>
    <View style={styles.appBackground}>
    <Image source={require('../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>
    <ArtistList artists= {artistAPI.results}/>
    </View>

    // </View>

  )
}

const styles = StyleSheet.create({
  appBackground: {
  
    backgroundColor: "#1E193B",
    
    
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.2

  }
});