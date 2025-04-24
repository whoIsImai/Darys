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
          marginTop: 10,
          height: 30,
          
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "orange",
          height: 80,
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
        headerTitleAlign: "left",
        headerTitleContainerStyle: {
          paddingLeft: 20,
          marginTop: 10,
          height: 30,
          
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "orange",
          height: 80,
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
          headerTitleAlign: "left",
          headerTitleContainerStyle: {
            paddingLeft: 20,
            marginTop: 10,
          height: 30,
            
          },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "orange",
            height: 80,
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
