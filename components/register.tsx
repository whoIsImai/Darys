import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    container: { 
        padding: 20, 
        alignContent: "center",
        alignSelf: "center",
        marginTop: 100
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      borderRadius: 6,
    },
    button: { 
        marginTop: 20, 
        fontWeight: 'bold', 
        backgroundColor: "orange",
        flexDirection: 'row', 
        alignItems: "center", 
        alignContent: "center",
         alignSelf: "center",
        padding: 15,
         borderRadius: 50 
    },
    icon: {
        padding: 5,
        fontSize: 18
    },
    registerText: {
        padding: 5, 
        fontSize: 18
    }
})

export default function register({ onRegister }: { onRegister: () => void }){

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
            onRegister()
            alert('Information successfully saved')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder='Enter your fullname for placing order.'
            />

            <TextInput 
                 style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
            />


            <TextInput 
                 style={styles.input}
                value={number}
                onChangeText={setNumber}
                placeholder='Cell Number'
            />


            <TextInput 
                 style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder='Your address'
            />

            <Pressable onPress={savedetails} style={styles.button}>
                <Ionicons name="save" style={styles.icon} />
                <Text style={styles.registerText}>Register</Text>
            </Pressable>
        </View>
    )

}