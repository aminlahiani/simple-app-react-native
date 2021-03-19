import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ColorCounter = ({ color , onIncrease , onDecrease }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button  onPress={() => onIncrease()}
       title={`increase ${color}`} />
      <Button  onPress={() => onDecrease()}
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
