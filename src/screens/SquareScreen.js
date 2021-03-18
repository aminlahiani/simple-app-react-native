import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBleu] = useState(0);
  return (
    <View>
      <Text style={Style.text}>Scquare Screen</Text>
      <ColorCounter
        color="Red"
        onIncrise={() => {
          setRed(red +50);
        }}
        onDencrise={() => {
          setRed(red -50);
        }}
      />

      <ColorCounter
        color="Blue"
        onIncrise={() => {
          setBleu(blue +50);
        }}
        onDencrise={() => {
          setBleu(blue -50);
        }}
      />

      <ColorCounter
        color="Green"
        onIncrise={() => {
          setGreen(green + 50);
        }}
        onDencrise={() => {
          setGreen(green - 50);
        }}
      />

      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
      <Text>{red} {blue} {green}</Text>
    </View>
  );
}

const Style = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
export default SquareScreen;
