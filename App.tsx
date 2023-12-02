/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




function App(): JSX.Element {
  
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const [randomSquare, setRandomSquare] = useState("#264653");
  const [randomRectangle, setRandomRectangle] = useState("#dedede");
  const [randomCircle, setRandomCircle] = useState("#000000");


  const generateColor =()=>{
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    let color1 = "#";
    let color2 = "#";
    let color3 = "#";



    for(let i=0; i<6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color);
    for(let j=0; j<6; j++) {
      color1 += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomSquare(color1)
    for(let k=0; k<6; k++) {
      color2 += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomRectangle(color2)
    for(let l=0; l<6; l++) {
      color3 += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomCircle(color3)
  }
  return (
    <ScrollView style={[styles.container, {backgroundColor:randomBackground} ]}>
    <StatusBar backgroundColor={randomBackground} />
    
      <View style={styles.shapesContainer}>
          <View style={[styles.square, {backgroundColor:randomSquare}]}></View>
          <View style={[styles.circle, {backgroundColor:randomCircle}]}></View>
          <View style={[styles.rectangle,{backgroundColor:randomRectangle}]}></View>
      </View>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={styles.actionBtn} onPress={generateColor}>
          <Text style={styles.btnText}>Change BG</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  shapesContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-evenly',
    margin:10,
    padding:5,
  },

  square:{
    width:150,
    height:150,
    // backgroundColor:'red'
  },
  rectangle:{
    width:250,
    height:100,
    // backgroundColor:'blue'
  },
  circle:{
    width:150,
    height:150,
    // backgroundColor:'white',
    borderRadius: 150/2
  },
  actionBtn:{
    borderRadius:10,
    backgroundColor:'#6a1b4d',
    width:100,
    height:50,
    paddingVertical:15,
    paddingHorizontal:10
  },
  btnText:{
    color:'#fff',
    textTransform:'uppercase'
  }
});

export default App;
