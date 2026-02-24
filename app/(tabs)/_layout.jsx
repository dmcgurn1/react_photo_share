import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: 'white',
        headerStyle: {
        backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
    }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="post_photo"
        options={{
          title: 'Post',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-outline' : 'add-circle-outline'} color={color} size={24}/>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cog-outline' : 'cog'} color={color} size={24}/>
          ),
        }}
      />

      {/* in order to hide tab on tab bar, set href = null for tab in (tabs) like so: */}
      <Tabs.Screen
        name="about"
        options={{
          // title: 'About',
          href: null,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
