import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

// Default Layout Component

// This file will add a header to our application which contains our Drawer Menu Navigation
export default function _layout() {
  return (
    // Modifies the CSS Styling and Spacing for Nav Header/Title
    <Drawer
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      {/* This will change the header title from index to whatever we want, in this case changed it to About */}
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name="information-circle-sharp"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}
