import React from "react";
import {  View , Text, StyleSheet , Button  } from "react-native";

const HomeScreen = () => {
  return <View style={{justifyContent: 'center', alignItems: 'center'}} >
  <Text style={styles.text}>HomeScreen</Text>
  <Button  title="Go List Demo" onPress={()=> navigation.navigate("Home")}/>

  <Button  title="Go Component Demo" onPress={()=> navigation.navigate("Home")}/>
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
     backgroundColor: `#dcdcdc`,
       }
});

export default HomeScreen;
