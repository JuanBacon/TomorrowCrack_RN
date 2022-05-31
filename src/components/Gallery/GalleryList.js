import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import GalleryCard from './GalleryCard';

export default function GalleryList(props) {


    const {images, changeHeader} = props;

  return (

    <FlatList style={ styles.bgColor} data={images} keyExtractor={(images)=> String(images.id)} contentContainerStyle={{ paddingBottom: 100, marginTop:10 }} numColumns={3}  renderItem={({item}) => <GalleryCard item ={item}  changeHeader= {changeHeader} />}  /> 
  )
}



const styles = StyleSheet.create({
  bgColor: {
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: "#9BFF00",
    padding:5,
    borderRadius: 25,
    backgroundColor: "rgba(48,43,79,0.8)",
    backdropFilter: "blur(6px)",
    mixBlendMode: "normal",
  },
});
