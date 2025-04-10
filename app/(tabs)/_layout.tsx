import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";


export default function TabLayout() {
  return(
    <Tabs>
      <Tabs.Screen 
      name="Index" 
      options={{
        headerTitle: "Foods",
        tabBarIcon: ({color}) => <Ionicons name="fast-food" size={24} color={color} />,
        tabBarLabel: "Food",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
      />

      <Tabs.Screen
      name="Order"
      options={{
        headerTitle: "Order Page",
        tabBarIcon: ({color}) => <Ionicons name="cart" size={24} color={color} />,
        tabBarLabel: "Order",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
      />

    </Tabs>
  )
}
