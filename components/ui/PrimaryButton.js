import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
        onPress={onPress}
        android_ripple={{ color: "#000" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 8,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#333",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  // pressed state for IOS
  pressed: {
    opacity: 0.75,
  },
});
