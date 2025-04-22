import { Stack } from "expo-router";

export default function RootLayout() {
  return(
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
            backgroundColor: "#4a90e2",
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
  )
}
