import Meals from '../assets/Meals.json'
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
        width: 170,
        marginTop: -1,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 1,
        borderRadius: 10,
        
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    price: {
        fontSize: 20,
        color: "gray",
        fontWeight: "bold",
        position: 'relative',
        top: 30,
        left: -30,
    },
    button: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
        position: 'relative',
        left: 40,
        top: -15,
    },
    desc: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "gray",
        textAlign: "center",
        position: 'relative',
        top: 15,
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
})

type MealItem = {
    name: string,
    description: string,
    price: number,
    img: string,
}

const imageMap: {[key : string] : any} = {
    "noImage.png": require("../assets/images/Darys/noImage.png"),
    "chicekn & chips.jpg" : require("../assets/images/Darys/chicekn & chips.jpg"),
    "chicken and saldds.jpg" : require("../assets/images/Darys/chicken and saldds.jpg"),
    "chicken chips.jpg" : require("../assets/images/Darys/chicken chips.jpg"),
    "chicken pap.jpg" : require("../assets/images/Darys/chicken pap.jpg"),
    "chicken salad and Rice.jpg" : require("../assets/images/Darys/chicken salad and Rice.jpg"),
    "pap chicken nd salad.jpg" : require("../assets/images/Darys/pap chicken nd salad.jpg"),
    "Ribs and Salad.jpg" : require("../assets/images/Darys/Ribs and Salad.jpg"),
    "Steak and more salad.jpg" : require("../assets/images/Darys/Steak and more salad.jpg"),
    "Steak pap.jpg" : require("../assets/images/Darys/Steak pap.jpg"),
    "Steak Salad.jpg" : require("../assets/images/Darys/Steak Salad.jpg"),
    "wing nd salads.jpg" : require("../assets/images/Darys/wing nd salads.jpg"),
    "Wings and Salad.jpg" : require("../assets/images/Darys/Wings and Salad.jpg"),
    "Wings Salad Pap.jpg" : require("../assets/images/Darys/Wings Salad Pap.jpg"),
    "Wings, Pap and Salad.jpg" : require("../assets/images/Darys/Wings, Pap and Salad.jpg"),
    "Wings.jpg" : require("../assets/images/Darys/Wings.jpg")
}

export default function MealMenu(){

    const renderItem = ({ item }: { item: MealItem }) => (

        <View style={styles.card}>
            <Image source={imageMap[item.img]} style={styles.image} />
            
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>R.{item.price}.00</Text>
            <Pressable style={styles.button}>
                <Ionicons name="add" size={24} color="white" />
            </Pressable>
        </View>
)

return(
    <SafeAreaView style={styles.container}>
        <FlatList scrollEnabled={false}
        data={Meals}
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