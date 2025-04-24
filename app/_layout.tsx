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
      <Stack.Screen name="checkout"
        options={{
          title: "Checkout",
          headerShown: true,
          headerTitleAlign: "center",
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
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack>
    </>
  )
}
