import { Text, View, StyleSheet, ScrollView } from "react-native";
import MenuBox
 from "@/components/MenuBox";
export default function index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#333",
    }
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to Darys</Text>
      <MenuBox
        title="Chips"
        onPress={() => {
          console.log("Meals");
        }}
      />
      <MenuBox
        title="Meals"
        onPress={() => {
          console.log("Orders");
        }}
      />
      <MenuBox
        title="Singles"
        onPress={() => {
          console.log("Profile");
        }}
      />
    </ScrollView>
  );
}
