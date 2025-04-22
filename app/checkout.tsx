import { View, Text, Pressable } from "react-native";

export default function CheckOut() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Immediate Order</Text>
            </Pressable>
            <Pressable>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Schedule Order</Text>
            </Pressable>
            
        </View>
    )
}