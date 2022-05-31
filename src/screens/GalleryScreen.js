import { View, Text, Image, StyleSheet } from "react-native";
import React , {useEffect, useState} from "react";
import GalleryList from "../components/Gallery/GalleryList";
import { galleryAPI } from "../utils/constants";
import GalleryHeader from "../components/Gallery/GalleryHeader";
import { SafeAreaView } from 'react-native-safe-area-context'


export default function GalleryScreen() {
  const [imageHeader, setImageHeader] = useState(galleryAPI.results[0])
  
  return (

    
    <View style={styles.container}>
      <Text style={styles.title}>Galería</Text>
      <Image source={require('../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>
      <GalleryHeader image={imageHeader} />
      <View style={styles.bgColor}>
      <GalleryList images={galleryAPI.results} changeHeader ={ (item)=>{ setImageHeader(item);}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }, container: {
    flex: 1,
    flexWrap: "nowrap",
    backgroundColor:'#06021B',
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity:0.1,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: "white",
    padding: 25,
    fontWeight: "bold"
  },
  bgColor: {
    borderRadius: 10,
    backgroundColor: "#9BFF00",
    padding:5,
    borderRadius: 25,
    backgroundColor: "rgba(48,43,79,0.8)",
    backdropFilter: "blur(6px)",
    mixBlendMode: "normal",
  },
});
