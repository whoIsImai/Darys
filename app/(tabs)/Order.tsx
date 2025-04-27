import {View, Text, StyleSheet, Pressable, ScrollView, Alert} from 'react-native'
import { useCart } from '@/logic/useCart'
import {Image} from 'expo-image'
import { ImageMap } from '@/utils/imageMap'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '@/components/loading'
import {  useState } from 'react'

type RootStackParamList = {
  Home: undefined
  payFastScreen: { payfastURL: string };
};


const styles = StyleSheet.create({
  card: {
    width: "50%",
    borderRadius: 10,
    padding: 5,
    marginLeft: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 7
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 7,
    marginTop: -60,
    marginBottom: 10
  },
  price: {
    fontSize: 15,
    marginLeft: 7,
    position: "relative",
    top: -20,
    left: -50,
    marginTop: 15
  }
})

type cartItem = {
  id: string
  name: string
  img : string
  price: number
  quantity: number
}

export default function order() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const cart = useCart(state => state.cart)
  const decrementQuantity = useCart(state => state.decrementQuantity)
  const increaseQuantity = useCart(state => state.increaseQuantity)
  const total = useCart((state) => state.total)
  const [loading, setLoading] = useState(false)
  
 

  if(cart.length !== 0){
    return (
      <ScrollView>
        {loading && <Loading />}
        <Text style={{
          position: "relative",
          left: 20,
          marginRight: 50,
          fontSize: 17, 
          marginTop: 20, 
          fontWeight: "500",
          marginBottom: 15,
        }}>
          Order List:
        </Text>
        {cart.map((item : cartItem) => {
          return (
          <View key={item.id} style={{alignItems: "center", 
            justifyContent: "space-between", 
            flexDirection: "row", 
            padding: 5,   
            borderWidth: 1,
            borderColor: '#ccc',
            marginTop: 10,
          
            borderRadius: 6, }}>
            <View style={styles.card} key={item.id}>
              <Image
                source={ImageMap[item.img] || ImageMap["noImage.png"]}
                style={styles.image}
              />
              <Text style={styles.title}>
                {item.name}
              </Text>
              </View>
            
              <Text style={styles.price}>R{item.price * item.quantity}.00</Text>
                
              <View style={{ flexDirection: 'row', alignItems: "center", position: "relative", top:20, left: -115 }}>
              <Pressable onPress={()=> {
                decrementQuantity(item.id)
              }}>
                <Ionicons name="remove-outline" style={{width: 30, height: 20, textAlign: "center", verticalAlign: "middle", justifyContent:"center",marginRight: 10, backgroundColor: "orange", color: "white", fontWeight: "black", borderRadius: 50 }} />
              </Pressable>
              <Text style={{borderColor: "orange", fontSize: 15 ,borderRadius: 5, borderStyle:"solid", borderWidth: 1, padding: 7}}>{item.quantity}</Text>
              <Pressable onPress={()=> {
                increaseQuantity(item.id)
              }}>
                <Ionicons name="add-sharp" style={{width: 30, height: 20, textAlign: "center", verticalAlign: "middle", justifyContent:"center",marginLeft: 10, backgroundColor: "orange", color: "white", fontWeight: "black", borderRadius: 50 }}/>
              </Pressable>
              </View>
           </View>
          )
        })}
       
        <Text style={{ 
         position: "relative",
         left: 20,
          marginRight: 50,
          fontSize: 17, 
          marginTop: 30, 
          fontWeight: "500",
          marginBottom: 20, 
          textDecorationLine: "underline",
          textDecorationStyle: "solid", 
         }}>
          Order Summary
        </Text>

        <Text style={{
          position: "relative",
          left: 20,
          fontSize:15, 
          marginBottom: 20, 
          fontWeight: "500"
          }}> Total - R{total}.00
        </Text>
        <Pressable 
        style={{ flexDirection: 'row', alignItems: "center", alignContent: "center", 
        alignSelf: "center", backgroundColor: "orange", padding: 17, borderRadius: 50}}

        onPress={async() => {
         try {
          setLoading(true)
          const jsonData = await AsyncStorage.getItem('user_data')
          if (!jsonData) return
          const user = JSON.parse(jsonData)
          const response = await fetch('https://s36n1vrm-2222.inc1.devtunnels.ms/api/pay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              Clientname : user.userName,
              amount: total, 
              item_name: cart.map((item) => `${item.name} x ${item.quantity}`).join(", "),
              item_description: "Your order description here",
              
            }),
          })
          
          console.log(response.statusText)
          const payfastURL = await response.text()
          console.log(payfastURL)
          if (response.ok) {
            navigation.navigate('payFastScreen', { payfastURL })
          } else {
            console.log(response.status)
            alert('Error: ' + payfastURL)
          }
          
          console.log("pressed")
         } catch (error) {
            console.error('Error:', error)
            Alert.alert('Error', 'An error occurred while processing your request. Please try again later.')
         } finally {
          setLoading(false)
         }
        }}
        >
     
          <Ionicons name="cash" style={{color: "white", padding: 5, fontSize: 18}} />
          <Text style={{color: "white", padding: 5, fontSize: 18}}>Checkout</Text>
        
        </Pressable>
      </ScrollView>
    )
  }else{ return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Ionicons name="cart"
        style={{
          fontSize: 90
        }}
      />
      <Text
        style={{
          fontSize: 30
        }}
      >Your cart is empty!</Text>
    </View>
  )
  }
}