import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>My name is {text} </Text>
      <Text>My age is {number} </Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.inputpass}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  inputpass: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default UselessTextInput;
