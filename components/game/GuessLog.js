import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function GuessLog({ roundNumber, guess }) {
  return (
    <View style={styles.guess}>
      <Text style={styles.item}>#{roundNumber}</Text>
      <Text style={styles.item}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guess: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    padding: 12,
    borderRadius: 24,
    marginVertical: 8,
    elevation: 10,
    backgroundColor: Colors.accent500,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },

  item: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
