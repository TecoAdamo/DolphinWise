import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import { useSubscriptions } from "../context/wiseContext";

const { height } = Dimensions.get("window");

export default function AddWises() {
  const { addSubscription } = useSubscriptions();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleAddSubscription() {
    if (!name || !price || !dueDate) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const newSubscription = {
      id: Math.random().toString(),
      name,
      price,
      dueDate,
    };

    addSubscription(newSubscription);
    setName("");
    setPrice("");
    setDueDate("");
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Adicionar Assinatura</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Assinatura</Text>
            <TextInput
              placeholder="Nome assinatura:"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Valor mensal: "
              style={styles.input}
              value={price}
              onChangeText={setPrice}
            />
            <TextInput
              placeholder="Data de assinatura: "
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
                onPress={handleAddSubscription}
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
    marginTop: "100%",
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
