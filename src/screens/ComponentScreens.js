import React from "react"
import { View , Text, StyleSheet , Button } from "react-native";

const ComponentScreens = () => {
  const name = <Text style={styles.text}>My name is Amin</Text>
    return (

    <View>
    <Text style={styles.textStyle}>Getting Starter with React Native </Text>
    {name}
    <Button  title="Go Home" onPress={()=> navigation.navigate("Home")}/>
    </View>
    )
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30
    },
    text: {
      fontSize: 25
    }
  });
  
  export default ComponentScreens;