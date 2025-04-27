import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { Image } from "expo-image"
import { ImageMap } from "@/utils/imageMap"

export default function PreviousOrders() {
    interface Order {
        name: string
        price: string
        img: string
        date: string
    }
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const jsonData = await AsyncStorage.getItem('latest_order')
                if (jsonData) {
                    setOrders(JSON.parse(jsonData))
                }
            } catch (error) {
                alert(error)
            }
        }
        loadOrders()
    }, []) 


    if(orders.length > 0){ {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                {orders.map((order, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18 }}>{order.name}</Text>
                        <Image source={ImageMap[order.img]} style={{
                              width: 170,
                              marginTop: -1,
                              height: 150,
                              resizeMode: 'cover',
                              marginBottom: 1,
                              borderRadius: 10,
                        }}/>
                        <Text style={{ fontSize: 16 }}>{order.price}</Text>
                        <Text style={{ fontSize: 14 }}>{order.date}</Text>
                    </View>
                ))}
            </View>
        )
    }

} else {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 18 }}>No previous orders found.</Text>
        </View>
    )}
}