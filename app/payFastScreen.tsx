import { Alert } from 'react-native';
import { WebView } from 'react-native-webview'
import { View } from 'react-native';

interface RouteParams {
  payfastURL: string;
}

export default function PayfastScreen({ route }: { route: { params: RouteParams } }) {
  const { payfastURL } = route.params

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
