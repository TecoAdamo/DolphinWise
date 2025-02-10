import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import Input from "../components/inputs/Input";
import InputName from "../components/inputs/InputName";
import Button from "../components/buttons/btn";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/authRoutes";

export default function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleGoLogin() {
    if (name === "" || email === "" || password === "") {
      Alert.alert("Erro", "Preencha os campos antes de prosseguir.");
    } else {
      navigation.navigate("signIn");
    }
  }

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Image
          source={require("../assets/Logo.Initial.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>DOLPHIN WISE</Text>
        <InputName name={name} setName={setName} />
        <Input
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Button title="C A D A S T R O" onPress={handleGoLogin} />
        <TouchableOpacity onPress={() => navigation.navigate("signIn")}>
          <Text style={styles.titleBtn}>
            Já tem uma conta? Entrar na sua conta.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#3AAAFE",
  },
  containerScroll: {
    backgroundColor: "#3AAAFE",
  },
  logo: {
    marginTop: "28%",
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
  },
  titleBtn: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 8,
  },
});
