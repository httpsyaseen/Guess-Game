import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";

export default function StartGameScreen({ pickHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleEnteredNumber(value) {
    setEnteredNumber(value);
  }

  function resetHandler() {
    setEnteredNumber("");
    pickHandler(enteredNumber);
  }

  function inputChecker() {
    const givenNumber = parseInt(enteredNumber);

    if (isNaN(givenNumber) || givenNumber < 0 || givenNumber > 99) {
      Alert.alert("Invalid Input !", "Number should be between 0 and 100", [
        { text: "Okay", style: "destructive", onPress: () => resetHandler() },
      ]);
    } else {
      pickHandler(givenNumber);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
      <Title>Guess Game</Title>
      <Card>
        <Text style={styles.enterNumber}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={(value) => handleEnteredNumber(value)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={inputChecker}>Cofirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  numberInput: {
    height: 40,
    fontSize: 22,
    width: 80,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  enterNumber: {
    color: "#dfd52c",
    fontSize: 24,
  },
});
