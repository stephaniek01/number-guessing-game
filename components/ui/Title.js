import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.textPrimary,
    padding: 16,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "open-sans-bold",
  },
});
