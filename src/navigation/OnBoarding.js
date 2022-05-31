import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'

export default function OnBoarding() {
  return (
    <View style={styles.appBackground}>
        <StatusBar barStyle="light-content" backgroundColor={"#302B4F"} />
        <Image source={require('../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>
        <Image source={require('../../assets/mobile.png')} style={styles.img} resizeMode="contain"></Image>
        <View style={styles.block}>
            <Text style={styles.title}>This is a walkthrough step</Text>
            <Text style={styles.text}>Hundreds of popular guided meditation practices, at the palm of your hand</Text>
            <Text style={styles.progress}>siguiente</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    appBackground: {
      backgroundColor: "#06021B",
      height: "100%", 
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    title: {
      textAlign: "center",
      fontSize: 32,
      fontWeight: "bold",
      marginTop: 30,
      marginBottom: 15,
      color: "white"
    },
    input: {
      height: 50,
      width:327,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "white"
      
    },
    text: {
      fontSize: 20,
      fontWeight: "500",
      lineHeight: 24,
      letterSpacing: -0.3,
      color: "rgba(255, 255, 255, 1)",
      textAlign: "center",
      justifyContent: "center",
    },
    video: {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0.1
    },
    img:{
        height: 250,
        width: 250,
        bottom: 70
    },
    progress:{
        marginTop: 180,
        marginBottom: 20,
        color: "white"
    },
    block: {
      backgroundColor: "rgba(48,43,79,0.7)",
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      width: "100%",
      display: "flex",
      alignItems:"center",
      paddingLeft: 44,
      paddingRight: 44
      
    }
  });