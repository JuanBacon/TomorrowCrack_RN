import { View, Text } from 'react-native'
import React from 'react'
import GalleryList from '../components/Gallery/GalleryList'
import { galleryAPI , imageHeader } from '../utils/constants'
import GalleryHeader from '../components/Gallery/GalleryHeader'



export default function GalleryScreen() {
  return (
    <View>
      <GalleryHeader image= {imageHeader.results} />
      <GalleryList  images= {galleryAPI.results} />
    </View>
  )
}