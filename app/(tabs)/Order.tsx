import {View, Text, StyleSheet} from 'react-native'
import { useCart } from '@/logic/useCart'
import {Image} from 'expo-image'
import { ImageMap } from '@/utils/imageMap'

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 7,
    margin: 1,
    marginBottom: 20,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // for Android shadow
    alignItems: 'center',
    marginTop: 10
  },
})

type cartItem = {
  id: string
  name: string
  img : string
  price: number
  quantity: number
}

export default function order(){

  
  const cart = useCart(state => state.cart)
  
  if(cart.length !== 0){
    return (
      <View>
        {cart.map((item : cartItem) => {
          return (
            <View style={styles.card} key={item.id}>
              <Image
                source={ImageMap[item.img] || ImageMap["noImage.png"]}
                style={{ width: 100, height: 100, borderRadius: 8 }}
              />
              <Text>
                {item.name} x{item.quantity} - R{item.price * item.quantity}
              </Text>
            </View>
          );
        })}
      </View>
    )
  }else{ return(
    <View>
      <Text>Your cart is empty go buy some stuff</Text>
    </View>
  )
  }
}