import { View, Text } from 'react-native'
import React from 'react'
import ArtistList from '../components/ArtistList'
import {artist} from '../utils/constants'

export default function ArtistScreen() {
  return (
    <View>
      
    <ArtistList artists= {artist}/>

    </View>
  )
}