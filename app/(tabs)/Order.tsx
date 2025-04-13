import {View, Text} from 'react-native'
import { useCart } from '@/logic/useCart'
export default function order(){

  const cart = useCart(state => state.cart)

  if(cart.length !== 0){
  return(
      <View>
      {cart.map(item => (
        <Text key={item.id}>
          {item.name} x{item.quantity} - R{item.price * item.quantity}
        </Text>
      ))}
    </View>
    )
  }else{
    <View>
      <Text>Your cart is empty go buy some stuff</Text>
    </View>
  }
}