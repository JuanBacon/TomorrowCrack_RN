import { View, Text, StyleSheet } from "react-native";
import React , {useEffect, useState} from "react";
import GalleryList from "../components/Gallery/GalleryList";
import { galleryAPI } from "../utils/constants";
import GalleryHeader from "../components/Gallery/GalleryHeader";

export default function GalleryScreen() {
  const [imageHeader, setImageHeader] = useState(galleryAPI.results[0])
  
  return (

    <View style={styles.container}>
      <GalleryHeader images={imageHeader} />
      <GalleryList images={galleryAPI.results} changeHeader ={ (item)=>{ setImageHeader(item);}} />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "nowrap",
  },
});
