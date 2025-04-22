import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native'
import { useCart } from '@/logic/useCart'
import {Image} from 'expo-image'
import { ImageMap } from '@/utils/imageMap'
import { Ionicons } from '@expo/vector-icons'



const styles = StyleSheet.create({
  card: {
    width: "50%",
    // backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
    margin: 1,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 5, // for Android shadow
    // marginTop: 10
  },
  image: {
    width: 120, 
    height: 120, 
    borderRadius: 7
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 7,
    marginTop: -80,
    marginBottom: 10
  },
  price: {
    fontSize: 15,
    marginLeft: 7,
    position: "relative",
    top: -105,
    left: 138,
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
        {cart.map((item : cartItem) => {
          return (
          <View>
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
                
              <View style={{ flexDirection: 'row', alignItems: "center", position: "relative", top:-100, left: 140 }}>
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
       
        <Text style={{ alignItems: "center", alignContent: "center", alignSelf: "center", fontSize:18, marginBottom: 20, fontWeight: "500"}}> Total - R{total}.00</Text>
        <Pressable 
        style={{ flexDirection: 'row', alignItems: "center", alignContent: "center", 
        alignSelf: "center", backgroundColor: "orange", padding: 17, borderRadius: 50}}
        >
          <Ionicons name="cash" style={{color: "white", padding: 5, fontSize: 18}} />
          <Text style={{color: "white", padding: 5, fontSize: 18}}>Checkout</Text>
        </Pressable>
      </ScrollView>
    )
  }else{ return(
    <View>
      <Text>Your cart is empty go buy some stuff</Text>
    </View>
  )
  }
}