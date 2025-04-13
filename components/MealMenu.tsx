import MealMenu from '../assets/Meals.json'
import { View, Text, StyleSheet, Pressable, SafeAreaView, FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Image} from 'expo-image'



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