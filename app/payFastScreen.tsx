import { Alert } from 'react-native';
import { WebView } from 'react-native-webview'
import { View, Text } from 'react-native';

interface RouteParams {
  payfastURL: string;
}

export default function PayfastScreen({ route }: { route: { params: RouteParams } }) {
  const { payfastURL } = route.params

  if (!payfastURL) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>No payment URL provided.</Text>
      </View>
    )
  }


  return (
    <View style={{ flex: 1 }}>
      <WebView
      source={{ uri: payfastURL }}
      onNavigationStateChange={(navState) => {
        if (navState.url.includes('https://payment-messages.vercel.app/success')) {
          Alert.alert('Payment Successful', 'Your payment was successful!')
        } else if (navState.url.includes('https://payment-messages.vercel.app/failed')) {
            Alert.alert('Payment Failed', 'Your payment failed. Please try again.')
        }
      }}
    />
    </View>
  );
}
