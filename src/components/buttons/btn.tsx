import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  onPress?: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBox} onPress={onPress}>
        <Text style={styles.titleBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBox: {
    width: "100%",
    borderRadius: 12,
    height: 50,
    backgroundColor: "#595FFF",
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBtn: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
  },
});
