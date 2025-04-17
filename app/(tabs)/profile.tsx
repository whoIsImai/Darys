import {View, Text} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import Register from '@/components/register'

interface User {
    name: string
     number: string
     address: string
}

export default function Profile() {
    const [user, setUser] = useState<User[]>([])

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const jsonData = await AsyncStorage.getItem('user_data')
                setUser(jsonData != null ? JSON.parse(jsonData) : null)
            } catch (error) {
                alert(error)
            }
        }
        loadUsers()
    }, [])

    if(user != null){
        return (
            <View>
                {user.map((user, index) => (
                    <View key={index}>
                        <Text>{user.name}</Text>
                        <Text>{user.number}</Text>
                        <Text>{user.address}</Text>
                    </View>
                ))}
            </View>
        )
    }
    
      return(
        <View>
        <Register />
        </View>
      )
    
}