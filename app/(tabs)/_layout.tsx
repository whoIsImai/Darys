import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" 
      options={{
        title: "Meals",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#4a90e2",
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
          backgroundColor: "#4a90e2",
        },
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
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#4a90e2",
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
