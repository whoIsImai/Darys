import Kotas from '../assets/Kotas.json'
import { View, Text, StyleSheet, Pressable, SafeAreaView, FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Image} from 'expo-image'

const styles = StyleSheet.create({
    container: {
        flex: 1,
       padding: 10,
        backgroundColor: "#fff",
        position: 'relative',
        top: -40,
    },
    image: {
        width: "50%",
        height: 50,
        resizeMode: 'cover',
        marginBottom: 8,
        borderRadius: 25,
    },
    text: {
        fontSize: 29,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        color: "gray",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
    },
    desc: {
        fontSize: 13,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "gray",
    },
    card: {
        width: "48%",
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 7,
        margin: 1,
        marginBottom: 20,
        alignSelf: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, // for Android shadow
        alignItems: 'center',
      },
    heart: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    }
})

type KotaItem = {
    name: string,
    description: string,
    price: number,
    img: string,
}

export default function KotaMenu() {
        
    const renderItem = ({ item }: { item: KotaItem }) => (
            <View style={styles.card}>
                <Image source={{uri: item.img}} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <Text style={styles.price}>R.{item.price}</Text>
                <Pressable style={styles.button}>
                    <Ionicons name="add" size={24} color="white" />
                </Pressable>
            </View>
    )

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={Kotas}
            renderItem={renderItem}
            key={'two-columns'}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2} // 👈 This makes it 2 cards per row
            //contentContainerStyle={styles.container}
            columnWrapperStyle={{ justifyContent: 'space-between' }} // Optional: adds spacing between the 2 cards
            />
        </SafeAreaView>
    )
}
