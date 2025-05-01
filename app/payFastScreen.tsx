import { WebView } from 'react-native-webview'
import { View, Text, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useOrderStore } from '@/logic/orderStore'
import { useCart } from '@/logic/useCart'
import { useRouter } from 'expo-router'
import { useOrderIdStore } from '@/logic/orderID'

interface RouteParams {
  payfastURL: string
}

export default function PayfastScreen() {
  const { setLatestOrder } = useOrderStore()
  const {cart, total, deleteCart} = useCart()
  const { orderId, clearOrderId } = useOrderIdStore()
  const route = useRoute()
  const router = useRouter()
  const { payfastURL } = route.params as RouteParams

  if (!payfastURL) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>No payment URL provided.</Text>
      </View>
    )
  }

  const order = {
    id: orderId,
    name: cart.map(item => `${item.name} x ${item.quantity}`).join(' , '),
    price: total.toString(),
    date: new Date().toLocaleDateString()
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
      source={{ uri: payfastURL }}
      onNavigationStateChange={(navState) => {
        if (navState.url.includes('https://payment-messages.vercel.app/success')) {
          if(orderId !== null) {
            setLatestOrder(order)
          }
          deleteCart()
          clearOrderId()
          router.push('/(tabs)')
        } else if (navState.url.includes('https://payment-messages.vercel.app/failed')) {
            router.push('/(tabs)/order')
        }
        
      }}
    />
    </View>
  );
}

