import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'
import { useCart } from "@/logic/useCart";

export default function TabsLayout() {

  const { cart } = useCart()
  const cartCount = cart.length

  return(
    <Tabs>
      <Tabs.Screen name="index" 
      options={{
        title: "Darys \t\t\t\t\t\t\t\t\t\t Our Menu",
        headerTitleAlign: "left",
        headerTitleContainerStyle: {
          paddingLeft: 20,
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "orange",
        },
       
       
        tabBarLabel: "Meals",
        tabBarIcon: ({ color }) => (
          <Ionicons name="fast-food" size={24} color={color} />
        ),
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      }}
      />

      <Tabs.Screen name="order"
      options={{
        title: "Your Orders",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "orange",
        },
        tabBarLabel: "Orders",
        tabBarIcon: ({color}) => (
          <Ionicons name="cart" size={24} color={color} />
        ),
        tabBarBadge: cartCount > 0 ? cartCount : undefined,
        tabBarBadgeStyle: {
          backgroundColor: "orange",
          color: "white",
          fontWeight: "bold",
          fontSize: 12,
          top: -5,
          padding: 2,
          borderRadius: 10,}
        ,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      }} />

      <Tabs.Screen name="profile"
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "orange",
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({color}) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
        }} />

    </Tabs>
  )
}
