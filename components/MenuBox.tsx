import { StyleSheet, View, Pressable, Text } from "react-native"
import { useState } from "react"

const styles = StyleSheet.create({
  box: {
    backgroundColor: "orange",
    height: 50,
    padding: 0,
    borderRadius: 5,
    margin: 25,
    position: "relative",
    top: -5,
    width: 80,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  activeButton: {
    backgroundColor: '#006400',
  },
  inactiveButton: {
    backgroundColor: '#ccc',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#333',
  },
})

type MenuBoxProps = {
  title: string,
  onPress: () => void,
  name: string
}

export default function MenuBox({ title, onPress, name } : MenuBoxProps) {

    const [selected, setSelected] = useState('')

    onPress = () => {
        setSelected(name)
    }

  return (
    <Pressable onPress={onPress} style={[styles.box, selected === name ? styles.activeButton : styles.inactiveButton]}>
      <Text style={[styles.text, selected === name ? styles.activeText : styles.inactiveText]}>{title}</Text>
    </Pressable>
  )
}