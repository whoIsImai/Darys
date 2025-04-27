import { Stack } from "expo-router"
import {StatusBar} from "expo-status-bar"

export default function RootLayout() {
  return(
    <>
      <StatusBar style="light" backgroundColor="black" />
    <Stack>
      <Stack.Screen name="(tabs)" 
      options={{
        headerShown: false,
      }}
      />

      <Stack.Screen name="payFastScreen"
        options={{
          title: "Payment Page",
          headerTitleAlign: "left",
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: 16,
          },
        }}
      />
      <Stack.Screen name="previousOrders"
        options={{
          title: "Order Summary",
          headerTitleAlign: "left",
          headerShown: true,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: 16,
          },
        }}
      />

    </Stack>
    </>
  )
}
