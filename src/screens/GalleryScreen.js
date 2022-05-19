import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GalleryList from "../components/Gallery/GalleryList";
import { galleryAPI, imageHeader } from "../utils/constants";
import GalleryHeader from "../components/Gallery/GalleryHeader";

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <GalleryHeader images={imageHeader.results} />
      <GalleryList images={galleryAPI.results} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "nowrap",
  },
});
