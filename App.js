import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickNumber, setPickNumber] = useState("");

  function pickHandler(value) {
    setPickNumber(value);
  }

  let screen = <StartGameScreen pickHandler={pickHandler} />;

  if (pickNumber) {
    screen = <GameScreen />;
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.app}>
        <ImageBackground
          source={require("./assets/images/dice.png")}
          resizeMode="cover"
          style={styles.app}
          imageStyle={{ opacity: 0.15 }}
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
