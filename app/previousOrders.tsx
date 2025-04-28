import { ScrollView,View, Text } from "react-native"
import { Image } from "expo-image"
import { ImageMap } from "@/utils/imageMap"
import { useOrderStore } from "@/logic/orderStore"

export default function PreviousOrders() {
    type Order = {
        name: string
        price: string
        img: string
        date: string
    }
  
    const { latestOrder } = useOrderStore()
    
    if(latestOrder.length !== 0 ){ {
        return (
            <ScrollView style={{ flex: 1, padding: 20 }}>
                {latestOrder.map((order: Order) => {
                    return (
                    <View key={order.name} style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18 }}> Order: {order.name}</Text>
                        <Image source={ImageMap[order.img] || ImageMap["noImage.png"]} style={{
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
                    )
                })}
                  
            </ScrollView>
        )
    }

} else {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 18 }}>No previous orders found.</Text>
        </View>
    )}
}