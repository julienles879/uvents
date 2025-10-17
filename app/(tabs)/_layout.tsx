import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'fixed',
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderRadius: 25,
          height: 70,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 8,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 5 },
      }}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? Colors[colorScheme ?? 'light'].tint
                  : 'transparent',
                borderRadius: 15,
                padding: 8,
              }}
            >
              <IconSymbol
                size={focused ? 30 : 26}
                name="house.fill"
                color={focused ? '#fff' : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(events)"
        options={{
          title: 'Events',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? Colors[colorScheme ?? 'light'].tint
                  : 'transparent',
                borderRadius: 15,
                padding: 8,
              }}
            >
              <IconSymbol
                size={focused ? 30 : 26}
                name="plus.circle.fill"
                color={focused ? '#fff' : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? Colors[colorScheme ?? 'light'].tint
                  : 'transparent',
                borderRadius: 15,
                padding: 8,
              }}
            >
              <IconSymbol
                size={focused ? 30 : 26}
                name="map.fill"
                color={focused ? '#fff' : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: 'Tickets',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? Colors[colorScheme ?? 'light'].tint
                  : 'transparent',
                borderRadius: 15,
                padding: 8,
              }}
            >
              <IconSymbol
                size={focused ? 30 : 26}
                name="ticket.fill"
                color={focused ? '#fff' : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(users)"
        options={{
          title: 'User',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? Colors[colorScheme ?? 'light'].tint
                  : 'transparent',
                borderRadius: 15,
                padding: 8,
              }}
            >
              <IconSymbol
                size={focused ? 30 : 26}
                name="person.fill"
                color={focused ? '#fff' : color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
