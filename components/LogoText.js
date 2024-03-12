import { Text, StyleSheet } from "react-native";

export default function LogoText({ children }) {
  return <Text style={styles.instruction}>{children}</Text>;
}
const styles = StyleSheet.create({
  instruction: {
    color: "#dfd52c",
    fontSize: 24,
  },
});
