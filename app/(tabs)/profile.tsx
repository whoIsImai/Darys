import {View, Text, StyleSheet, Pressable, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import Register from '@/components/register'
import { Ionicons } from '@expo/vector-icons'

interface User {
    userName: string,
    userNumber: string,
    userAddress: string
}

const styles = StyleSheet.create({
    container: { 
        padding: 20, 
        alignContent: "center",
        alignSelf: "center",
        marginTop: 100
    },
    details: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 20
    },
    box: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 6,
        flexDirection: 'row', 
        alignItems: "center", 
        alignContent: "center", 
        alignSelf: "center"
    },
    deleteAccount: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 20
    },
    icon: {
        padding: 5,
        fontSize: 18
    },
})

export default function Profile() {
    const [user, setUser] = useState<User>()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const jsonData = await AsyncStorage.getItem('user_data')
                if (jsonData) {
                    setUser(JSON.parse(jsonData))
                }
            } catch (error) {
                alert(error)
            }
        }
        loadUsers()
    }, [refresh]) 
   

    const deleteAccount = async()=> {
        try {
            await AsyncStorage.removeItem('user_data')
            setUser(undefined)
            setRefresh(prev => !prev)
           Alert.alert('Account Removed','Account Successfully removed')
        } catch (error) {
            alert(error)
        }
    }
    
    if(user != null){
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Ionicons name="person" style={styles.icon}/>
                   <Text style={styles.details}>{user?.userName}</Text> 
                </View>
                
                <View style={styles.box}>
                    <Ionicons name="phone-portrait" style={styles.icon} />
                    <Text style={styles.details}> (+27) {user?.userNumber}</Text>
                </View>

                <View style={styles.box}>
                    <Ionicons name="home" style={styles.icon} />
                   <Text style={styles.details}>{user?.userAddress}</Text> 
                </View>

                <Pressable style={styles.box} onPress={deleteAccount}>
                    <Ionicons name="trash"  style={styles.icon}/>
                   <Text style={styles.deleteAccount}>Delete Account</Text> 
                </Pressable>
            </View>
        )
    } else{

        return(
          <View>
          <Register onRegister={() => setRefresh(prev => !prev)} />
          </View>
        )
    }
}