import { Alert } from 'react-native';
import { WebView } from 'react-native-webview'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useOrderStore } from '@/logic/orderStore'
import { useCart } from '@/logic/useCart'

interface RouteParams {
  payfastURL: string;
}

export default function PayfastScreen() {
  const { setLatestOrder } = useOrderStore()
  const {cart, total} = useCart()
  const route = useRoute()
  const { payfastURL } = route.params as RouteParams

  if (!payfastURL) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>No payment URL provided.</Text>
      </View>
    )
  }

  const order = {
    name: cart.map(item => `${item.name} X ${item.quantity}`).join(', '),
    img: cart.map(item => item.img).join(', '),
    price: total,
    date: new Date().toLocaleDateString()
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
      source={{ uri: payfastURL }}
      onNavigationStateChange={(navState) => {
        if (navState.url.includes('https://payment-messages.vercel.app/success')) {
          Alert.alert('Payment Successful', 'Your payment was successful!')
          setLatestOrder(order)
          
        } else if (navState.url.includes('https://payment-messages.vercel.app/failed')) {
            Alert.alert('Payment Failed', 'Your payment failed. Please try again.')
        }
        
      }}
    />
    </View>
  );
}

