import { StyleSheet, View, Pressable, Text } from "react-native"

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f0f0f0",
    height: 50,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: "80%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

type MenuBoxProps = {
  title: string,
    onPress: () => void,
}

export default function MenuBox({ title, onPress } : MenuBoxProps) {
  return (
    <Pressable onPress={onPress} style={styles.box}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}