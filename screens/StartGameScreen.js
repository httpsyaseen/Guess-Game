import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen({ pickHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleEnteredNumber(value) {
    setEnteredNumber(value);
  }

  function resetHandler() {
    setEnteredNumber("");
  }

  function inputChecker() {
    const givenNumber = parseInt(enteredNumber);

    if (isNaN(givenNumber) || givenNumber < 0 || givenNumber > 99) {
      Alert.alert("Invalid Input !", "Number should be between 0 and 100", [
        { text: "Okay", style: "destructive", onPress: () => resetHandler() },
      ]);
    }
    pickHandler(enteredNumber);
  }

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
    borderRadius: 5,
    elevation: 5,
    marginTop: 60,
    padding: 16,
    backgroundColor: "#3b021f",
  },
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
});
