import {View, Text, StyleSheet, Pressable, ScrollView, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

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
            if(name.length < 5){
                alert('Enter fullname')
                return
            } 
            if(number.length <= 9 || number.length > 10){
                alert("Enter a valid number")
                return
            }

            await AsyncStorage.setItem('user_data', JSON.stringify(user))
            alert('Information successfully saved')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <View>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder='Enter your fullname. This will be used for placing order.'
            />

            <TextInput 
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
            />


            <TextInput 
                value={number}
                onChangeText={setNumber}
                placeholder='Cell Number'
            />


            <TextInput 
                value={address}
                onChangeText={setAddress}
                placeholder='Your address'
            />

            <Pressable onPress={savedetails}>
                <Ionicons name="save" />
                <Text>Register</Text>
            </Pressable>
        </View>
    )

}