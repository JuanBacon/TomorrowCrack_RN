import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { artist } from '../utils/constants';

export default function ArtistList(props) {

  const {artists: {singers}} = props;
  console.log(singers);

  return (
    <FlatList data={singers} keyExtractor= {(item) => item.id} />
     
    
  )
}


const styles = StyleSheet.create({


    
})