import Kotas from '../assets/Kotas.json'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Image} from 'expo-image'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "gray",
    },
    button: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 50,
        marginLeft: 10,
    },
    desc: {
        fontSize: 12,
        color: "gray",
    },
})

export default function KotaMenu() {
    

    return(
        <View style={styles.container}>
            {Kotas.map((kota) => (
                <>
                <Ionicons name="heart-outline" size={24} color="black" />
                <Image source={kota.img} style={styles.image} />
                <Text style={styles.text}>{kota.name}</Text>
                <Text style={styles.desc}>{kota.description}</Text>
                <Text style={styles.price}>{kota.price}</Text>
                <Pressable style={styles.button}>
                    <Ionicons name="add" size={24} color="black" />
                </Pressable>
                </>
            ))}
        </View>
    )
}
