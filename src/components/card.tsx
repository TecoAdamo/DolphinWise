import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

type Subscription = {
  id: string;
  name: string;
  price: string;
  dueDate: string;
};

type CardProps = {
  data: Subscription[];
};

export default function Card({ data }: CardProps) {
  function handleSubscriptionPress(subscription: Subscription) {
    Alert.alert(
      "Detalhes da Assinatura",
      `Nome: ${subscription.name}\nPreço: ${subscription.price}\nVencimento: ${subscription.dueDate}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Assinaturas</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleSubscriptionPress(item)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.dueDate}>Vencimento: {item.dueDate}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#ECECEC",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#595FFF",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "green",
  },
  dueDate: {
    fontSize: 12,
    color: "gray",
  },
});
