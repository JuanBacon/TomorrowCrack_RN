import { View, Text, StyleSheet } from "react-native";
import React , {useEffect, useState} from "react";
import GalleryList from "../components/Gallery/GalleryList";
import { galleryAPI } from "../utils/constants";
import GalleryHeader from "../components/Gallery/GalleryHeader";
import { SafeAreaView } from 'react-native-safe-area-context'


export default function GalleryScreen() {
  const [imageHeader, setImageHeader] = useState(galleryAPI.results[0])
  
  return (

    <SafeAreaView style={styles.container}>
      <GalleryHeader image={imageHeader} />
      <GalleryList images={galleryAPI.results} changeHeader ={ (item)=>{ setImageHeader(item);}} />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "nowrap",
  },
});
