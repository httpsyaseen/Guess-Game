import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickNumber, setPickNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessNumber, setGuessNumber] = useState(0);

  function pickHandler(value) {
    setPickNumber(value);
    setIsGameOver(false);
  }

  function gameOver(totalGuess) {
    setGuessNumber(totalGuess);
    setIsGameOver(true);
  }

  function restartGame() {
    setIsGameOver(true);
    setPickNumber("");
  }

  let screen = <StartGameScreen pickHandler={pickHandler} />;

  if (pickNumber) {
    screen = <GameScreen userNumber={pickNumber} gameOver={gameOver} />;
  }

  if (isGameOver && pickNumber) {
    screen = (
      <GameOverScreen
        restartGame={restartGame}
        userNumber={pickNumber}
        roundsNumber={guessNumber}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.app}>
        <ImageBackground
          source={require("./assets/images/dice.png")}
          resizeMode="cover"
          style={styles.app}
          imageStyle={{ opacity: 0.35 }}
        >
          <SafeAreaView style={styles.app}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 10,
  },
});
