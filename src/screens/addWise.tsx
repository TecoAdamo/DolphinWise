import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import UserPhoto from "../components/userPhoto";

const { height } = Dimensions.get("window");

type Subscription = {
  id: string;
  name: string;
  price: string;
  dueDate: string;
};

type CardProps = {
  data: Subscription[];
};

export default function AddWises({ data }: CardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dueDate, setDueDate] = useState("");

  function addSubscription() {
    const trimmedName = name.trim().toLowerCase();
    if (!trimmedName || !price.trim() || !dueDate.trim()) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const alreadyExists = subscriptions.some(
      (sub) => sub.name.toLowerCase() === trimmedName
    );

    if (alreadyExists) {
      Alert.alert("Erro", "Essa assinatura já está cadastrada!");
      return;
    }

    const newSubscription: Subscription = {
      id: Math.random().toString(),
      name: name.trim(),
      price: price.trim(),
      dueDate: dueDate.trim(),
    };

    setSubscriptions((prev) => [...prev, newSubscription]);
    setName("");
    setPrice("");
    setDueDate("");
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      {/* Botão para abrir o modal */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Adicionar Assinatura</Text>
      </TouchableOpacity>

      {/* Lista das minhas Assinaturas  */}
      <View style={styles.card}>
        <FlatList
          data={subscriptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>💰 R$ {item.price}</Text>
              <Text style={styles.details}>
                📅 Data da assinatura: {item.dueDate}
              </Text>
            </View>
          )}
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Assinatura</Text>
            <TextInput
              placeholder="Nome da Assinatura: "
              placeholderTextColor="#595FFF"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Valor mensal: "
              placeholderTextColor="#595FFF"
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Data de Assinatura: "
              placeholderTextColor="#595FFF"
              style={styles.input}
              value={dueDate}
              onChangeText={setDueDate}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={addSubscription}
              >
                <Text style={styles.modalButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3AAAFE",
    alignItems: "center",
    width: "100%",
  },
  addButton: {
    backgroundColor: "#595FFF",
    padding: 20,
    borderRadius: 10,
    marginTop: "70%",
    marginBottom: 14,
  },

  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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
  item: {
    backgroundColor: "#ECECEC",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#595FFF",
    width: "100%",
    marginRight: 90,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "green",
  },
  details: {
    fontSize: 14,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 46,
    backgroundColor: "#D7DFE3",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    backgroundColor: "#595FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
