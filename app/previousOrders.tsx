import { ScrollView,View, Text } from "react-native"
import { useOrderStore } from "@/logic/orderStore"

export default function PreviousOrders() {
  
    const { latestOrder } = useOrderStore()
    
    const sortedOrders = latestOrder.sort((a, b) => new Date(b.date.replace(/\//g, '-')).getTime() - new Date(a.date.replace(/\//g, '-')).getTime())

    if(latestOrder.length > 0 ){ {
        return (
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Previous Orders</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>You have {sortedOrders.length} previous orders.</Text>
                {sortedOrders.map((order) => {
                        return (
                            <View key={order.id} style={{ marginBottom: 20, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order ID: {order.id}</Text>
                                <Text style={{ fontSize: 15}}>{order.name}</Text>
                                <Text style={{ fontSize: 16 }}> Total - R{order.price}.00</Text>
                                <Text style={{ fontSize: 14 }}>Ordered on - {new Date(order.date.replace(/\//g, '-')).toLocaleDateString()}</Text>
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