import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'

export default function GalleryCard(props) {

    const {item} = props


  return (
    <View>
      <Image source={{uri: item.url}} style= {styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({

    image : {
        height:100,
        width:100
    }
})