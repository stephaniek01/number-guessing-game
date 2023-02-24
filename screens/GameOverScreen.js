import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const GameOverScreen = ({ onRestart, userNumber, numberOfRounds }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.successImage}
          source={require("../assets/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{numberOfRounds}</Text> guesses to
        guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 50,
  },
  imageContainer: {
    borderRadius: 9999,
    height: 300,
    width: 300,
    overflow: "hidden",
  },
  successImage: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: "center",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
  },
});
