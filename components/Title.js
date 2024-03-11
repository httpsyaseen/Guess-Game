import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 4,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },
});
