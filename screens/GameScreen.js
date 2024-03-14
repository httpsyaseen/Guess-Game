import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import LogoText from "../components/LogoText";
import { Ionicons, AntDesign } from "@expo/vector-icons";

function randomNumber(min, max, exclude) {
  const rnd = Math.floor(Math.random() * (max - min) + min);
  if (rnd === exclude) {
    randomNumber(min, max, exclude);
  } else {
    return rnd;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, gameOver }) {
  const rn = randomNumber(1, 100, userNumber);
  const [guessNumber, setGuessNumber] = useState(rn);

  useEffect(() => {
    if (guessNumber === userNumber) {
      gameOver();
    }
  }, [guessNumber]);

  function checker(direction) {
    console.log(guessNumber);
    console.log(minBoundary, maxBoundary);
    if (
      (direction === "lower" && guessNumber < userNumber) ||
      (direction === "higher" && guessNumber > userNumber)
    ) {
      Alert.alert("Chal Jhootay", "Jhoot bolty ho", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guessNumber;
      const n = randomNumber(minBoundary, maxBoundary, guessNumber);
      setGuessNumber(n);
    } else {
      minBoundary = guessNumber + 1;
      const n = randomNumber(minBoundary, maxBoundary, guessNumber);
      setGuessNumber(n);
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card>
        <LogoText>higher or Lower?</LogoText>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => checker("lower")}>
              <AntDesign name="minus" size={24} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={() => checker("higher")}>
              <AntDesign name="plus" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
