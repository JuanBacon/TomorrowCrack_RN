import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function GalleryHeader(props) {
  const { images } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: images[0].url }} />

      <Text style={styles.text}> Texto de ejemplo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: "100%",
  },
  text: {
    position: "absolute",
    color: "white",
  },
});
