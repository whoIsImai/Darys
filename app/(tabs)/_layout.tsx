import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    <Tabs>
      <Tabs.Screen 
      name="index" 
      options={{
        headerTitle: "Home Page"
      }}
      />
    </Tabs>
  )
}
