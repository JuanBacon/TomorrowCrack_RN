import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function GalleryHeader(props) {
  
    const {image} = props;
    
    return (
    <View>
        <Image style= { styles.image} />
      <Text>GalleryHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    image: {
        
        height: 150,
        width: 200 
    }

})