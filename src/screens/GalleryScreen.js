import { View, Text, StyleSheet } from "react-native";
import React , {useEffect, useState} from "react";
import GalleryList from "../components/Gallery/GalleryList";
import { galleryAPI } from "../utils/constants";
import GalleryHeader from "../components/Gallery/GalleryHeader";

export default function GalleryScreen() {
  const [imageHeader, setImageHeader] = useState(galleryAPI.results[0])
  
  return (

    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <GalleryHeader image={imageHeader} />
      <GalleryList images={galleryAPI.results} changeHeader ={ (item)=>{ setImageHeader(item);}} />
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
    backgroundColor:'#302B4F',
  },
});
