import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

export default function register(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const user = {
        userName: name,
        userPassword: password,
        userNumber: number,
        userAddress: address
    }

    const savedetails = async()=> {
        try {
            await AsyncStorage.setItem('user_data', JSON.stringify(user))
            alert('Information successfully saved')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <View>
            
        </View>
    )

}