import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function GalleryCard(props) {
  const { item , changeHeader} = props;

  return (
    <TouchableWithoutFeedback onPress={()=>changeHeader(item)}>
      <View>
        <Image source={{ uri: item.url }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}




const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 115,
    borderRadius:10,
    margin:10,
  },
  fondo:{
    backgroundColor:'white',
    opacity:0.5,
  },
});
