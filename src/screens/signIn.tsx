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
import Button from "../components/buttons/btn";
import { AuthNavigatorRoutesProps } from "../routes/authRoutes";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleGoHome() {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos antes de prosseguir.");
    } else {
      navigation.navigate("home");
      setEmail("");
      setPassword("");
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
        <View style={styles.viewBox}>
          <Input
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
          <Button title="L O G I N" onPress={handleGoHome} />
          <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
            <Text style={styles.titleBtn}>Não tem uma conta? Criar conta.</Text>
          </TouchableOpacity>
        </View>
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
  logo: {
    marginTop: "28%",
    width: 150,
    height: 150,
  },
  viewBox: {
    width: "100%",
    alignItems: "center",
    marginTop: "28%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
  },
  containerScroll: {
    flex: 1,
    backgroundColor: "#3AAAFE",
  },
  titleBtn: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 8,
  },
});
