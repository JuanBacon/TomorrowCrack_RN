import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

export default function ArtistCard(props) {
  const { item } = props;
  return (
    <View style={styles.card}>
      <View style={styles.spacing}>
        <View style={styles.bgColor}>
          <View style={styles.content}>
            <Text style={styles.name}> {item.name} </Text>
            <Pressable style={styles.button}>
              <Image source={require('../../assets/spotify_icon.png')} style={styles.imageBtn} />
              <Text style={styles.textButton}>Lista</Text>
            </Pressable>
          </View>
          <View style={styles.content}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.textDesc}> {item.desc}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgColor: {
    borderRadius: 10,
    backgroundColor: "#9BFF00",
    padding: 10,
    borderRadius: 25,
    backgroundColor: "rgba(48,43,79,0.8)",
    backdropFilter: "blur(6px)",
    mixBlendMode: "normal",
  },
  name: {
    flexGrow: 1,
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 30,
    color: "white"
  },
  button: {
    flexDirection: "row",
    width: "10%",
    flexGrow: 1,
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 1,
    backgroundColor: "#B667F4",
    opacity:0.8,
  },
  textButton: {
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center",
    letterSpacing: 0.25,
    color: "white",
  },
  imageBtn: {
    marginRight: 4,
    alignSelf: "center",
    justifyContent: "center",
    height: 25,
    width: 25,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  textDesc: {
    flexShrink: 1,
    color: "white",
    left: 10
  },
});
