import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native"
import { useState } from "react"
import KotaMenu from "./KotaMenu"
import MealMenu from "./MealMenu"
import SingleMenu from "./SingleMenu"


const styles = StyleSheet.create({
  box: {
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
    position: "relative",
    top: -5,
    width: 80,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  activeButton: {
    backgroundColor: 'orange',
  },
  inactiveButton: {
    backgroundColor: '#ccc',
  },
  activeText: {
  color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inactiveText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

const menuBox = [
  { name: 'kotas', title: 'Kotas' },
  { name: 'meals', title: 'Meals' },
  { name: 'singles', title: 'Singles' },
]


export default function MenuBox() {

    const [selected, setSelected] = useState('kotas')

  return (
    <ScrollView nestedScrollEnabled>
      <View>
      <Text style={styles.header}>Welcome to Darys</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 50, marginLeft: 30 }}>
            {menuBox.map((btn) => (
              <Pressable key={btn.name} onPress={() => setSelected(btn.name)} 
                style={[styles.box, selected === btn.name ? styles.activeButton : styles.inactiveButton]}>
                <Text style={[selected === btn.name ? styles.activeText : styles.inactiveText]}>{btn.title}</Text>
              </Pressable>
            ))}

          </View>

            { selected === "kotas" && <KotaMenu />}
            { selected === "meals" && <MealMenu />}
            { selected === "singles" && <SingleMenu />}
      </View>
    </ScrollView>
  )
}