import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity , Image } from "react-native";
import ImageDetail from '../components/ImageDetail';
const  ImagesSreen = () =>  {
    return (
       <View>
         <ImageDetail title="forest" imageSource={require("../../assets/forest.jpg")} score="7"/>
         <ImageDetail title="beach"  imageSource={require("../../assets/beach.jpg")} score="9" />
         <ImageDetail title="mountain"  imageSource={require("../../assets/mountain.jpg")} score="11"/>
       </View>
    )
}
const Styles = StyleSheet.create({
    text: {
      fontSize: 30,
      backgroundColor: "#f5f5dc"
      
    },

      
  });
export default ImagesSreen
