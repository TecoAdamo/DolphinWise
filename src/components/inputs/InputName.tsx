import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

type InputProps = {
  name: string;
  setName: (text: string) => void;
};

export default function InputName({ name, setName }: InputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputBox}
          placeholder="Nome:"
          placeholderTextColor="#595FFF"
          value={name}
          onChangeText={setName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
  },
  containerInput: {
    marginTop: 90,
    alignItems: "center",
    marginBottom: 12,
  },
  inputBox: {
    width: "120%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 12,
    textAlign: "left",
    color: "#595FFF",
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "#595FFF",
    marginTop: 32,
  },
});
