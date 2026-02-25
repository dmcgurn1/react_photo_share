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
        height: '10%',
        },
    }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={32} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="post_photo"
        options={{
          title: 'Post',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-outline' : 'add-circle-outline'} color={color} size={32}/>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cog-outline' : 'cog'} color={color} size={32}/>
          ),
        }}
      />

      {/* in order to hide tab on tab bar, set href = null for tab in (tabs) like so: */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile/1"
        options={{
          title: 'My Profile',
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile/2"
        options={{
          title: 'Profile n',
          href: null,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          href: null,
        }}
      />
    </Tabs>
  );
};
