import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ArtistCard from "./ArtistCard";

export default function ArtistList(props) {
  const { artists } = props;

  return (
    <FlatList
      data={artists}
      keyExtractor={(artist) => String(artist.id)}
      numColumns={1}
      style={styles.flatListContainer}
      renderItem={({ item }) => <ArtistCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});
