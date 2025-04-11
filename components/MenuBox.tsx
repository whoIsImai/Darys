import { StyleSheet, View, Pressable, Text } from "react-native"
import { useState } from "react"


const styles = StyleSheet.create({
  box: {
    height: 50,
    padding: 0,
    borderRadius: 50,
    margin: 25,
    position: "relative",
    top: -5,
    width: 80,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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
  { name: 'chips', title: 'Chips' },
  { name: 'meals', title: 'Meals' },
  { name: 'singles', title: 'Singles' },
]


export default function MenuBox() {

    const [selected, setSelected] = useState('chips')

   

  return (
    
    menuBox.map((btn) => (
      <Pressable key={btn.name} onPress={() => setSelected(btn.name)} 
        style={[styles.box, selected === btn.name ? styles.activeButton : styles.inactiveButton]}>
        <Text style={[selected === btn.name ? styles.activeText : styles.inactiveText]}>{btn.title}</Text>
      </Pressable>
    ))
  )
}