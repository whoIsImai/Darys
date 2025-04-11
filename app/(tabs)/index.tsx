import { Text, View, StyleSheet, ScrollView } from "react-native"
import MenuBox from "@/components/MenuBox"


export default function index() {
  const styles = StyleSheet.create({
    header: {
      fontSize: 29,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#333",
    },
    MenuBoxContainer:{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      position: 'relative',
      top: -20, 
      height: 100,
    }
  });

  return (
    <ScrollView>
      <Text style={styles.header}>Welcome to Darys</Text>

      <View style={styles.MenuBoxContainer}>
          <MenuBox
            title="Chips"
            onPress={() => {
              console.log("Meals");
            }}
            name="Chips"
          />
          <MenuBox
            title="Meals"
            onPress={() => {
              console.log("Orders");
            }}
            name="Meals"
          />
          <MenuBox
            title="Singles"
            onPress={() => {
              console.log("Profile");
            }}
            name="Singles"
          />
      </View>
    </ScrollView>
  );
}
