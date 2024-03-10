import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleEnteredNumber(value) {
    console.log(value);
    setEnteredNumber(value);
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
          <PrimaryButton>Cofirm</PrimaryButton>
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
    marginTop: 100,
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
