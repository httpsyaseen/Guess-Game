import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function randomNumber(min, max, exclude) {
  const rnd = Math.floor(Math.random() * (max - min) + min);
  if (rnd === exclude) {
    randomNumber(min, max, exclude);
  } else {
    return rnd;
  }
}

export default function GameScreen({ userNumber }) {
  const rn = randomNumber(1, 100, userNumber);
  console.log(rn);
  const [guessNumber, setGuessNumber] = useState(rn);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <View>
        <Text>higher or Lower?</Text>
        <View>
          <PrimaryButton>+</PrimaryButton>
          <PrimaryButton>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
