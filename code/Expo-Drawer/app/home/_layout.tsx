import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

// Within Home Component, adding the layout and tabs helps keep things organized
export default function _layout() {
  return (
    <Tabs
      // Hide the "index" header inside Home component
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Add Settings Icon for "settings" tab */}
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
      {/* Add Notifications Icon for "notifications" tab */}
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
