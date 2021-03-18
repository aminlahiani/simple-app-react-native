import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';
const HomeScreen = ({navigation}) => {
 
  return (
    
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button  title="Go Component Demo" onPress={() => navigation.navigate('Compenent')} />
      <Button title="Go List Demo" onPress={() =>  navigation.navigate('List')} />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: `#dcdcdc`,
    marginBottom : 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop : 20
  },
});

export default HomeScreen;
