import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
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
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
