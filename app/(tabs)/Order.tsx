import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native'
import { useCart } from '@/logic/useCart'
import {Image} from 'expo-image'
import { ImageMap } from '@/utils/imageMap'
import { Ionicons } from '@expo/vector-icons'
import { Link, Stack } from "expo-router"


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
  
  const cart = useCart(state => state.cart)
  const decrementQuantity = useCart(state => state.decrementQuantity)
  const increaseQuantity = useCart(state => state.increaseQuantity)
  const total = useCart((state) => state.total)

  if(cart.length !== 0){
    return (
      <ScrollView>
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
        >
        <Link href="/checkout">
          <Ionicons name="cash" style={{color: "white", padding: 5, fontSize: 18}} />
          <Text style={{color: "white", padding: 5, fontSize: 18}}>Checkout</Text>
        </Link>
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