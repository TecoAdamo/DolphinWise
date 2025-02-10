import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import UserPhoto from "../components/userPhoto";
import Card from "../components/card";
import { AppNavigatorRoutesProps } from "../routes/appRoutes";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const subscriptions = [
  { id: "2", name: "Spotify", price: "R$19,90", dueDate: "15/02/2025" },
  { id: "3", name: "Amazon Prime", price: "R$14,90", dueDate: "20/02/2025" },
  { id: "4", name: "Disney+", price: "R$27,90", dueDate: "25/02/2025" },
  { id: "5", name: "Paramount+", price: "R$17,90", dueDate: "25/04/2025" },
  { id: "6", name: "Star+", price: "R$27,90", dueDate: "20/02/2025" },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTexts}>
        <UserPhoto
          mr={4}
          borderColor="#595FFF"
          size={80}
          source={{ uri: "https://github.com/TecoAdamo.png" }}
        />
        <Text style={styles.text}>Bem vindo</Text>
        <Text style={styles.subTxt}>Mateus Adamo</Text>
      </View>
      <View style={styles.card}>
        <Card data={subscriptions} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3AAAFE",
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    height: height * 0.6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  containerTexts: {
    marginLeft: 70,
    marginBottom: 50,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  subTxt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
