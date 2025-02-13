import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from "react-native";

type FilterStyleProps = {
  isActive?: boolean;
};
type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title?: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive ? styles.activeContainer : styles.inactiveContainer,
      ]}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginRight: 12,
    height: 40,
    width: "28%",
    borderWidth: 1,
    borderColor: "red",
    marginBottom: 14,
    backgroundColor: "white",
  },
  activeContainer: {
    borderWidth: 2,
    borderColor: "#595FFF",
  },
  inactiveContainer: {
    borderWidth: 0,
  },
  text: {
    fontWeight: "700",
    fontSize: 14,
    color: "#3AAAFE",
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center",
  },
});
