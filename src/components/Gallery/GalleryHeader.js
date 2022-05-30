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
    marginBottom: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#302B4F',
    borderRadius:50,
    opacity:0.5,
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius:30,
  },
  text: {
    position: "absolute",
    color: "white",
  },
});
