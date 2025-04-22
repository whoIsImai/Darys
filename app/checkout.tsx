import { View, Text, Pressable, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Immediate: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
        
    },
    Schedule: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
    },
    ImmediateBtn: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    ScheduleBtn: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    }
})

export default function CheckOut() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.ImmediateBtn}>
                <Text style={styles.Immediate}>Immediate Order</Text>
            </Pressable>
            <Pressable style={styles.ScheduleBtn}>
                <Text style={styles.Schedule}>Schedule Order</Text>
            </Pressable>
            
        </View>
    )
}