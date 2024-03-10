import { Pressable, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonPressed, styles.buttonContainer]
          : styles.buttonContainer
      }
      android_ripple={{ color: "#640233" }}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
    margin: 4,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  buttonPressed: {
    opacity: 0.75,
  },
});
