import React , { useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity , Image } from "react-native";
const  ImageDetail = ({title , imageSource , score}) =>  {
     const [state, setstate] = useState(title)
    return (
       <View>
           <Text style={Styles.text}> Image {title}</Text>
           <Image source={imageSource} />
           <Text style={Styles.scoure}> Image Scoure {score}</Text>
           
       </View>
    )
}
const Styles = StyleSheet.create({
    text: {
      fontSize: 20,
      backgroundColor: "#f5f5dc"
      
    },
    scoure :{
      marginTop : 20 ,
      marginBottom : 30
    }

      
  });
export default ImageDetail
