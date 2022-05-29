import { View, Text } from 'react-native'
import React from 'react'
import ArtistList from '../components/ArtistList'
import {artistAPI} from '../utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function ArtistScreen() {


  return (
    <SafeAreaView>
      
    <ArtistList artists= {artistAPI.results}/>

    </SafeAreaView>
  )
}