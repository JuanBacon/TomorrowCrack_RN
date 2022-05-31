import { View, Text, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import react from 'react';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: "1",
    image: require('../../assets/mobile.png'),
    tittle: "Bienvenido a TomorrowCrack's App",
    desc: "Esta es la aplicación de TomorrowCrack el mejor festival del país, desarrollada por Camilo Reyes, Juan Bustamante, Nathalia Rodriguez y Abdiel Arias"
  },
  {
    id: "2",
    image: require('../../assets/travel.png'),
    tittle: "Todo sobre el evento",
    desc: "En esta app podrás ver los artistas invitados, la ubicación y fecha del evento, además de poder comprar los tiquetes para asistir"
  },
  {
    id: "3",
    image: require('../../assets/avatar.png'),
    tittle: "Tu perfil",
    desc: "En la app puedes acceder a tu propio perfil y así poder pedir las entradas al TomorrowCrack Festival a tu nombre y dirección"
  },
]

const Slide = ({item}) => {
  return(
    <View style={{alignItems: "center"}}>
      <Image source={item.image} style={styles.img}></Image>
      <View style={styles.block}>
        <Text style={styles.tittle}> {item.tittle} </Text>
        <Text style={styles.text}> {item.desc}</Text>
      </View>
        

    </View>
  );
};

export default function OnBoarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = react.useState(0);
  const Footer = () => {
    return <View style={{height:height * 0.20, justifyContent: "space-between", paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row', justifyContent:"center",marginTop:20}}>
        {slides.map((_,index) => (<View key= {index} style={[styles.indicator, currentSlideIndex == index && {
          backgroundColor: "white",
          width: 25
        }]}></View>))}
      </View>
      <View style={{marginBottom:20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={[styles.btn, styles.btnSecundario]}>
            <Text style={[styles.btnText]}>OMITIR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnPrincipal]}>
            <Text style={[styles.btnText]}>SIGUIENTE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  }
  return (
    
    <SafeAreaView style={styles.appBackground}>
      <Image source={require('../../assets/GifMuestra2.gif')} style={styles.video} resizeMode="cover"></Image>
      <StatusBar barStyle="light-content" backgroundColor={"#302B4F"} />
      <FlatList
      pagingEnabled
      data={slides} 
      contentContainerStyle={{height: height*0.85}}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Slide item={item} />}

      />
      <Footer></Footer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    appBackground: {
      backgroundColor: "#06021B",
      height: height, 
      display: "flex",
      justifyContent: 'center'
    },
    tittle: {
      textAlign: "center",
      fontSize: 32,
      fontWeight: "bold",
      maxWidth: '75%',
      marginTop: 10,
      marginBottom: 15,
      color: "white"
    },
    text: {
      fontSize: 20,
      maxWidth: '70%',
      fontWeight: "200",
      lineHeight: 24,
      color: "rgba(255, 255, 255, 1)",
      textAlign: "center",
    },
    video: {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0.04
    },
    img:{
        height: 250,
        width: width,
        resizeMode: 'contain',
        marginVertical: 30
    },
    block: {
      backgroundColor: "rgba(48,43,79,0.7)",
      width: width * 0.9,
      borderRadius: 50,
      height: height * 0.38,
      display: "flex",
      alignItems:"center",
      justifyContent: "center",
      
    },
    indicator: {
      height: 2.5,
      width:20,
      backgroundColor: "#302B4F",
      marginHorizontal: 3,
      borderRadius: 2
    },
    btn: {
      width: width * 0.4,
      borderRadius: 5,
      height:50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnPrincipal: {
      backgroundColor: "rgba(106,103,244,1)",
    },
    btnSecundario: {
      borderColor: "rgba(106,103,244,1)",
      borderWidth: 1
    },
    btnText:{
      color: "white",
      fontSize: 20,
      fontWeight: "300",
    }
  });