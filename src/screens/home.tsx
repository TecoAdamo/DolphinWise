import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import UserPhoto from "../components/userPhoto";
import Card from "../components/card";
import { useSubscriptions } from "../context/wiseContext";
import { Filter } from "../components/filterWises/filter";

const { height } = Dimensions.get("window");

export default function Home() {
  const { subscriptions } = useSubscriptions();

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
      <View style={styles.containerView}>
        <Filter title="Ativas" isActive={true} />
        <Filter title="Pendentes" />
        <Filter title="Canceladas" />
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
  containerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
