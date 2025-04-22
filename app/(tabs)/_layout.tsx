import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" 
      options={{
        title: "Meals",
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
        tabBarLabel: "Orders",
        tabBarIcon: ({color}) => (
          <Ionicons name="cart" size={24} color={color} />
        ),
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      }} />

      <Tabs.Screen name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({color}) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
        }} />

      <Tabs.Screen name="checkout"
        options={{
          href: null,
          title: "Checkout",
          tabBarLabel: "Checkout",
          tabBarIcon: ({color}) => (
            <Ionicons name="checkmark-circle" size={24} color={color} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
        }} 
        />

    </Tabs>
  )
}
