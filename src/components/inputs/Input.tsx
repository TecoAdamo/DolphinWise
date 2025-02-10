import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import Button from "../buttons/btn";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../../routes/authRoutes";

type InputProps = {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
};

export default function Input({
  email,
  setEmail,
  password,
  setPassword,
}: InputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputBox}
          placeholder="E-mail:"
          keyboardType="email-address"
          placeholderTextColor="#595FFF"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Senha:"
          secureTextEntry
          placeholderTextColor="#595FFF"
          value={password}
          onChangeText={setPassword}
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
    alignItems: "center",
  },
  inputBox: {
    width: "120%",
    height: 50,
    backgroundColor: "#fff", // Fundo roxo para contrastar com o texto
    borderRadius: 12,
    textAlign: "left", // Alinhar o texto no centro
    color: "#595FFF", // Cor do texto digitado
    paddingHorizontal: 15, // Espaçamento interno
    borderWidth: 2,
    borderColor: "#595FFF",
    margin: 10,
  },
});
