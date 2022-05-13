import { View, Text } from 'react-native'
import React from 'react'
import ArtistList from '../components/ArtistList'
import {artistAPI} from '../utils/constants'

export default function ArtistScreen() {


  return (
    <View>
      
    <ArtistList artists= {artistAPI.results}/>

    </View>
  )
}