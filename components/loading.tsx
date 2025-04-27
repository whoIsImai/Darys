import { View, StyleSheet, ActivityIndicator } from "react-native"

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
  })

export default function Loading() {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="orange" />
        </View>
    )
}