import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver, onGuess }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuessess] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guesses.length);
  }, [currentGuess, userNumber, onGameOver]);

  // this function will run only and only when this component is mounted for the first time
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const numberOfGuesses = guesses.length;

  function newGuessHandler(direction) {
    // check if the direction is valid
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "enter correctly", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") maxBoundary = currentGuess;
    else minBoundary = currentGuess;

    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newGuess);
    setGuessess((prevGuessList) => [newGuess, ...prevGuessList]);
    onGuess();
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={newGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove-circle" size={24} />
          </PrimaryButton>
          <PrimaryButton onPress={newGuessHandler.bind(this, "higher")}>
            <Ionicons name="add-circle" size={24} />
          </PrimaryButton>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ padding: 16, flex: 1 }}
          data={guesses}
          keyExtractor={(item) => item}
          renderItem={(element) => (
            <GuessLogItem roundNo={numberOfGuesses - element.index}>
              {element.item}
            </GuessLogItem>
          )}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
