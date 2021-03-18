import React , {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/core';
const ColorScreen = ({navigation}) => {
    const [colors, setColors] = useState([]);
  return (
    
    <View >
     
     <Button
        title="Add a Color 1"
        onPress={() => {
          setColors([...colors, RandomRgb()]);
        }}
      />

    <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
  
    </View>
  );
};

const RandomRgb = () => {
    const red = Math.floor(Math.random() * 255) ;
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
} ;

  
const Styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: `#dcdcdc`,
    marginBottom : 30
  },
  button: {
   color : "#ffffff"
  },
  f1 : {
      marginLeft : 100
  }
});

export default ColorScreen;
