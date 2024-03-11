import { View, Text, StyleSheet } from "react-native";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },

  numberText: {
    color: "#ddb52f",
    fontSize: 36,
  },
});
