import { Text, View, StyleSheet } from "react-native";

export default function index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text>This will show the meals.</Text>
    </View>
  );
}
