import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import GalleryCard from './GalleryCard';

export default function GalleryList(props) {


    const {images, changeHeader} = props;

  return (

    <FlatList data={images} keyExtractor={(images)=> String(images.id)} numColumns={3}  renderItem={({item}) => <GalleryCard item ={item}  changeHeader= {changeHeader} />}  /> 
  )
}

