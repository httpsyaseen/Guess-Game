import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
    borderRadius: 5,
    elevation: 5,
    marginTop: 40,
    padding: 16,
    backgroundColor: "#3b021f",
  },
});
