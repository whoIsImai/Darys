import { ScrollView,View, Text } from "react-native"
import { useOrderStore } from "@/logic/orderStore"

export default function PreviousOrders() {
  
    const { latestOrder } = useOrderStore()
    
    if(latestOrder.length > 0 ){ {
        return (
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Previous Orders</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>You have {latestOrder.length} previous orders.</Text>
                {latestOrder.map((order) => {
                        return (
                            <View key={order.id} style={{ marginBottom: 20, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order ID - {order.id}</Text>
                                <Text style={{ fontSize: 15}}>{order.name}</Text>
                                <Text style={{ fontSize: 16 }}> Total - R{order.price}.00</Text>
                                <Text style={{ fontSize: 14 }}>Ordered on - {order.date}</Text>
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