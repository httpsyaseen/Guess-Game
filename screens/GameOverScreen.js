import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ restartGame }) {
  return (
    <View style={styles.rootScreen}>
      <Title>GameOver !</Title>
      <View style={styles.imageConatiner}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.line}>
        Your need <Text style={styles.highlight}>X</Text> chances to guess the
        number <Text style={styles.highlight}> Y</Text>.
      </Text>
      <PrimaryButton onPress={restartGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConatiner: {
    borderRadius: 200,
    height: 300,
    width: 300,
    margin: 36,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  line: {
    fontSize: 22,
    marginBottom: 15,
  },
  highlight: {
    fontSize: 26,
    color: "#4e0329",
    fontWeight: "bold",
  },
});
