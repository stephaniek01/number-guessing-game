import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function textInputHandler(enteredInput) {
    setEnteredNumber(enteredInput);
  }

  function confirmInputHandler() {
    const inputNumber = parseInt(enteredNumber);

    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber >= 99) {
      Alert.alert("Invalid Input", "Please input a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirmNumber(inputNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Number Guesser</Title>
      <View style={styles.container}>
        <TextInput
          style={styles.numberInput}
          value={enteredNumber}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={textInputHandler}
        />

        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,

  },
  container: {
    alignItems: "center",

    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#ddd",
    // shadow property for android
    elevation: 9,
    // shadow property for IOS
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 32,
    fontSize: 32,
    fontWeight: "bold",
    color: "#777",
    borderBottomColor: "#777",
    borderBottomWidth: 2,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
