import {View, Text, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import Register from '@/components/register'

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
    name: {

    },
    number: {

    },
    address: {

    },
    deleteAccount: {

    }
})

export default function Profile() {
    const [user, setUser] = useState<User>()
  
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
    }, [])
    console.log(user)
    
    if(user != null){
        return (
            <View style={styles.container}>
                <Text>
                    {user?.userName}
                </Text>
                
                <Text>
                    {user?.userNumber}
                </Text>

                <Text>
                    {user?.userAddress}
                </Text>
            </View>
        )
    } else{

        return(
          <View>
          <Register />
          </View>
        )
    }
}