import {View, Text, StyleSheet, Pressable, TextInput, Alert} from 'react-native'
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
    inputNumber: {
        borderWidth: 2,
        borderColor: 'orange',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
        color: 'black',
        fontSize: 16,
      },
    inputName: {
        borderWidth: 2,
        borderColor: 'orange',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
        color: 'black',
        fontSize: 16,
    },
    inputAddress: {
        borderWidth: 2,
        borderColor: 'orange',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
        color: 'black',
        fontSize: 16,
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
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const user = {
        userName: name,
        userNumber: number,
        userAddress: address
    }

    const savedetails = async()=> {
        try {
            if(name.length < 5){
                Alert.alert('Error on name','Enter fullname')
                return
            } 
            if(number.length <= 9 || number.length > 10){
                Alert.alert('Error on password',"Enter a valid number with no whitespace")
                return
            }

            await AsyncStorage.setItem('user_data', JSON.stringify(user))
            onRegister()
            Alert.alert('Saved','Information successfully saved')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.inputName}
                value={name}
                onChangeText={setName}
                placeholder='Fullname For Placing Order.'
            />

            <TextInput 
                 style={styles.inputNumber}
                value={number}
                onChangeText={setNumber}
                placeholder='Cell Phone Number'
            />


            <TextInput 
                 style={styles.inputAddress}
                value={address}
                onChangeText={setAddress}
                placeholder='Physical Adress Incase Of Delivery'
            />

            <Pressable onPress={savedetails} style={styles.button}>
                <Ionicons name="save" style={styles.icon} />
                <Text style={styles.registerText}>Register</Text>
            </Pressable>
        </View>
    )

}