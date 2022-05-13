import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ArtistCard(props) {
  const { name, desc, uri } = props
  return (
    <View style={styles.card} >
      <View style={styles.spacing}>
        <View style={styles.bgColor}>
          <View><Text style={styles.name} >ArtistCard: {name} </Text></View>
          <View style={styles.content}>
            <Image source={{ uri: uri }} style={styles.image} />
            <Text> Descripcion: {desc}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  card: {
    flex: 1,
    height: 150
  }
  , spacing: {
    flex: 1,
    padding: 10,
    
  }
  , bgColor: {

    borderRadius: 10,
    backgroundColor: '#9BFF00',
    padding: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    height: 100,
    width: 100
  },
  content: {
    flexDirection: 'row', 
  }
})