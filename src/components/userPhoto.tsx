import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

interface UserPhotoProps {
  size?: number;
  borderColor?: string;
  source: ImageSourcePropType;
  mr?: number;
}

export default function UserPhoto({
  size = 50,
  borderColor = "gray",
  source,
}: UserPhotoProps) {
  const styles = createStyles(size, borderColor);

  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const createStyles = (size: number, borderColor: string) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderWidth: 2,
      borderRadius: size / 2,
      borderColor: borderColor,
      overflow: "hidden",
      marginBottom: 8,
    },
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
      resizeMode: "cover",
    },
  });
