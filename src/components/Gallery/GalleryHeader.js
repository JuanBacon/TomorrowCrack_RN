import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function GalleryHeader(props) {
  const { image } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image.url }} />

      <Text style={styles.text}>{image.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:80,
    marginBottom: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:30,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius:30,
  },
  text: {
    position: "absolute",
    color: "white",
    fontSize: 30,
    textShadowColor: '#0a0a0a',
    textShadowOffset:{width: -2, height: -2},
    textShadowRadius:3,
  },
});

