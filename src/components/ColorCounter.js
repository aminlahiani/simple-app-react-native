import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ColorCounter = ({ color , onIncrise , onDencrise }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button  onPress={() => onIncrise()}
       title={`increase ${color}`} />
      <Button  onPress={() => onDencrise()}
      title={`decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorCounter;
