import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Appearance,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function gameOverHandler(roundsNumber) {
    setIsGameOver(true);
    setNumberOfRounds(roundsNumber);
  }

  function pickedNumberHandler(confirmedNumber) {
    setPickedNumber(confirmedNumber);
    setIsGameOver(false);
  }

  function restartGame() {
    setPickedNumber(null);
    setNumberOfRounds(0);
  }

  function onGuessHandler() {
    setNumberOfRounds((preNumberOfRounds) => preNumberOfRounds + 1);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (pickedNumber)
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        onGameOver={gameOverHandler}
        onGuess={onGuessHandler}
      />
    );

  if (pickedNumber && isGameOver)
    screen = (
      <GameOverScreen
        onRestart={restartGame}
        userNumber={pickedNumber}
        numberOfRounds={numberOfRounds}
      />
    );

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary500, Colors.secondary500]}
      >
        <ImageBackground
          source={require("./assets/background.jpeg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.imageBackground}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.1,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
